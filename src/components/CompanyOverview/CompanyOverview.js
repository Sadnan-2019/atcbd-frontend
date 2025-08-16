import React from "react";



 
const caseStudies = [
  {
    image: "https://i.ibb.co.com/4w7dTw38/side-agriculture-en.webp", // Replace with your actual image URLs
    company: "ATCL",
    title: "LN-150/Homeworld Construction Corporation/Aug.2024",
    tags: ["Civil Engineering", "Total Stations"],
  },
  {
    image: "https://i.ibb.co.com/9kL2VBD6/side-bim-en.webp",
    company: "ATCL",
    title: "HiPer VR/PT. HUTAMA KARYA/Apr.2024",
    tags: ["Civil Engineering", "GNSS"],
  },
  {
    image: "https://i.ibb.co.com/6cFRXb4b/side-const-en.webp",
    company: "ATCL",
    title: "LN-100/KRIANGKRAI SURVEYING CO., LTD./Apr.2023",
    tags: ["Civil Engineering", "Total Stations"],
  },
];

export default function CompanyOverview () {
  return (
    <section className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">Case Study</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-44 object-cover rounded-lg mb-6"
              />
              <span className="text-xs font-semibold text-blue-600 mb-2 uppercase">{study.company}</span>
              <h3 className="font-bold text-lg text-gray-800 mb-4 text-center">{study.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {study.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-700 text-white text-xs rounded-full px-3 py-1 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-3 transition">
                Read more
                <span className="text-xl">&#8594;</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full flex items-center gap-3 text-lg shadow-md transition">
            View List
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
}