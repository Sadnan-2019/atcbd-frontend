import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogData = [
  {
    img: "https://atcbd.net//public/images/news/inspecton.jpg",
    date: "03",
    month: "Aug",
    title: "BITAC Inspection, Our valuable Managing Director Sir and Korea team, Under SEIP Project.",
    link: "https://atcbd.net/news/view/6",
  },
  {
    img: "https://atcbd.net//public/images/news/IMG_0423.jpg",
    date: "25",
    month: "Jan",
    title: "ATCL Established a Startup Lab (High Level Communication & Robotics Lab) at Ministry of ICT",
    link: "https://atcbd.net/news/view/3",
  },
];

const News = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="full-width-slider  py-8 px-2 bg-white">
<div className=" ">
        <h1 className="text-3xl text-center text-[#2C234D]  font-bold poppins-b sm:text-4xl py-2">
         Our News
        </h1>

        <p className=" lg:text-xl text-center text-[#E0581E] font-semibold   sm:text-4xl py-2">
          Our Recent News
        </p>
      </div>

      <Slider {...settings}>
        {blogData.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 left-3 bg-primary text-white p-2 rounded-lg text-center w-12">
                  <span className="block text-xl font-bold">{item.date}</span>
                  <p className="text-sm">{item.month}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold hover:text-primary transition-colors duration-300">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
