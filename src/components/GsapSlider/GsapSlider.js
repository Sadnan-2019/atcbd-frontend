import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useSwipeable } from "react-swipeable";

// Slider data
const slides = [
  {
    title: "Good Position For Good  ",
    button: { label: "Surveying", link: "#" },
    bg: "https://i.ibb.co/dswKy7fm/Leonardo-Phoenix-10-A-highly-detailed-and-realistic-illustrati-2.jpg",
  },
  {
    title: "Good Position For  ATCL Work",
    button: { label: "Civil Engineering", link: "#" },
    bg: "https://i.ibb.co/5bCJScR/banner3.jpg",
  },
  {
    title: "Good Position For Bangladesh",
    button: { label: "Building Construction", link: "#" },
    bg: "https://i.ibb.co/ycX1Lfhq/9c96602d-c4dd-4c55-aeb8-70d1c3c6d7cc.jpg",
  }
];




// Sidebar button data (fixed)
const sidebarButtons = [
  {
    img: "https://i.ibb.co.com/FbpFj4TF/side-survey-en-1.webp",
    label: "Surveying",
    link: "#surveying",
  },
  {
    img: "https://i.ibb.co.com/6cFRXb4b/side-const-en.webp",
    label: "Civil Engineering",
    link: "#civil",
  },
  {
    img: "https://i.ibb.co.com/9kL2VBD6/side-bim-en.webp",
    label: "Building Construction",
    link: "#building",
  },
  {
    img: "https://i.ibb.co.com/4w7dTw38/side-agriculture-en.webp",
    label: "Agriculture",
    link: "#agriculture",
  },
];

export default function GsapSlider() {
  const slideRefs = useRef([]);
  const titleRefs = useRef([]);
  const btnRefs = useRef([]);
  const timeline = useRef(null);

  // Use state so React re-renders when slide changes
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    showSlide(0);
    // Clean up timeline on unmount
    return () => timeline.current?.kill();
    // eslint-disable-next-line
  }, []);

  // showSlide sets GSAP animations and sets current slide
  const showSlide = (idx) => {
    setCurrentSlide(idx);
    if (timeline.current) timeline.current.kill();

    slides.forEach((_, i) => {
      gsap.set(slideRefs.current[i], {
        autoAlpha: i === idx ? 1 : 0,
        zIndex: i === idx ? 2 : 1,
      });
      gsap.set(titleRefs.current[i], { x: -40, opacity: 0 });
      gsap.set(btnRefs.current[i], { y: 40, opacity: 0 });
    });

    timeline.current = gsap.timeline();
    timeline.current
      .to(
        titleRefs.current[idx],
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.2
      )
      .to(
        btnRefs.current[idx],
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        0.4
      );

    // Auto-advance
    clearTimeout(timeline.current._autoAdvance);
    timeline.current._autoAdvance = setTimeout(() => {
      const next = (idx + 1) % slides.length;
      showSlide(next);
    }, 6000);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => showSlide((currentSlide + 1) % slides.length),
    onSwipedRight: () => showSlide((currentSlide - 1 + slides.length) % slides.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // For fade transition between backgrounds, render all bg divs and animate opacity
  useEffect(() => {
    slides.forEach((_, i) => {
      const bgDiv = document.getElementById(`slider-bg-${i}`);
      if (bgDiv) {
        gsap.to(bgDiv, {
          opacity: i === currentSlide ? 1 : 0,
          duration: 0.7,
          ease: "power2.out"
        });
      }
    });
  }, [currentSlide]);

  return (
    <section
      className="relative w-full min-h-[480px] flex flex-col md:flex-row items-stretch  overflow-hidden"
      {...handlers}
      style={{ background: "#fff" }}
    >
      {/* Multiple background images, handle fade transition */}
      {slides.map((slide, i) => (
        <div
          key={i}
          id={`slider-bg-${i}`}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slide.bg})`,
            filter: "brightness(0.99)",
            opacity: i === currentSlide ? 1 : 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      ))}
      {/* Dots (responsive, below slider on mobile) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 flex gap-3 md:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-none transition ${
              i === currentSlide
                ? "bg-blue-600 opacity-100"
                : "bg-white opacity-40"
            }`}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>
      {/* Slider Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center md:items-start px-4 md:pl-20 py-10">
        {slides.map((slide, i) => (
          <div
            key={i}
            ref={el => (slideRefs.current[i] = el)}
            className={`absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center md:items-center`}
            style={{
              opacity: i === currentSlide ? 1 : 0,
              pointerEvents: i === currentSlide ? "auto" : "none",
              transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)"
            }}
          >
            <h2
              ref={el => (titleRefs.current[i] = el)}
              className="text-[#1455c6] font-extrabold text-2xl md:text-4xl mb-10 text-center  "
              style={{ textShadow: "0 4px 32px #0007" }}
            >
              {slide.title}
            </h2>
            <div ref={el => (btnRefs.current[i] = el)}>
              <a
                href={slide.button.link}
                className="flex btn md-btn items-center bg-blue-500 bg-opacity-80 hover:bg-blue-600 transition rounded-full shadow-md    "
                style={{
                  
                  fontWeight: "bold",
                  fontSize: "1.05rem",
                  color: "#fff",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                }}
              >
                {slide.button.label}
                <span className="ml-auto bg-white bg-opacity-40 rounded-full w-10 md:w-5   h-10 md:h-5 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar Buttons */}
      <div className="relative z-30 flex flex-col gap-4 w-full md:w-[370px] py-4 px-4 md:pr-8 md:py-8">
        {sidebarButtons.map((btn, i) => (
          <a
            key={i}
            href={btn.link}
            className="flex items-center bg-blue-500 bg-opacity-80 hover:bg-blue-600 transition rounded-lg shadow-md w-full overflow-hidden"
            style={{ minHeight: "70px" }}
          >
            <img
              src={btn.img}
              alt={btn.label}
              className="w-16 md:w-28 h-16 p-1 object-cover"
            />
            <div className="flex-1 text-left px-2 md:px-4 py-2">
              <span className="block text-white font-bold text-base md:text-sm leading-tight">
                {btn.label}
              </span>
            </div>
            <div className="flex items-center justify-center px-2 md:px-5">
              <span className="bg-white bg-opacity-30 rounded-full w-8 md:w-10 h-8 md:h-10 flex items-center justify-center">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </a>
        ))}
     
     
      </div>
      {/* Dots (desktop, below slider content) */}
      <div className="absolute left-20 bottom-8 z-20 hidden md:flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full border-none transition ${
              i === currentSlide
                ? "bg-white opacity-100"
                : "bg-white opacity-40"
            }`}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}