// src/components/Companies.jsx
import React from "react";

const companies = [
  { 
    name: "ASMACS", 
    img: "assets/C1.gif", 
    link: "#" 
  },
  { 
    name: "ASMACS Systems Solutions", 
    img: "assets/C2.png", 
    link: "#" 
  },
  { 
    name: "Hunt Jobs Pvt Ltd", 
    img: "asstes/C3.png", 
    link: "#" 
  },
  { 
    name: "Espire System Pvt Ltd", 
    img: "assets/C4.png", 
    link: "#" 
  },
  { 
    name: "Albert A.Abela", 
    img: "assets/C5.jpg", 
    link: "#" 
  },
  { 
    name: "Krishna Tradings", 
    img: "/assets/C6.png", 
    link: "#" 
  },
  { 
    name: "Asmacs Tours & Travels", 
    img: "/assets/C7.gif", 
    link: "#" 
  },
  { 
    name: "Asmacs Qatar LLC", 
    img: "/path-to-your-images/qatar.png", 
    link: "#" 
  },
  { 
    name: "Asmacs General Trading Company WLL", 
    img: "/path-to-your-images/general.png", 
    link: "#" 
  },
];

const Companies = () => {
  return (
    <section className="bg-[#996633] py-12 px-4" id="companies">
      <h2 className="text-3xl font-bold text-center text-white mb-10">ASMACS GROUP OF COMPANIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {companies.map((company, index) => (
          <a 
            key={index} 
            href={company.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img src={company.img} alt={company.name} className="h-20 mb-4" />
            <div className="border-t w-48 mb-2"></div>
            <p className="text-center">{company.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Companies;
