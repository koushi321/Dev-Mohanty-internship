import React, { useState } from "react";
import "react-image-lightbox/style.css"; // You can remove this if not using Lightbox anymore

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  src: `assets/G${i + 1}.jpeg`,
}));
const placeholderImages1 = [
  { src: "assets/G15.jpeg" },
  { src: "assets/G16.jpeg" },
  { src: "assets/G17.jpeg" },
  { src: "assets/G18.jpeg" },
  
];
const placeholderImages2 = [
  { src: "assets/G19.jpg" },
  { src: "assets/G20.jpg" },
  { src: "assets/G21.jpg" },
  { src: "assets/G22.jpg" },
  { src: "assets/G23.jpg" },
  { src: "assets/G24.jpg" },
  { src: "assets/G25.jpg" },
  { src: "assets/G26.jpg" },
  { src: "assets/G27.jpg" },
  
];
const placeholderImages3 = [
  { src: "assets/G28.jpeg" },
  { src: "assets/G29.jpeg" },
  { src: "assets/G30.jpeg" },
  { src: "assets/G31.jpeg" },
  { src: "assets/G32.jpeg" },
  { src: "assets/G33.jpeg" },
  { src: "assets/G34.jpeg" },
  { src: "assets/G35.jpeg" },
  { src: "assets/G36.jpeg" },
  { src: "assets/G37.jpeg" },
  { src: "assets/G38.jpeg" },
  { src: "assets/G39.jpeg" },
  { src: "assets/G40.jpeg" },
  
  
];
const placeholderImages4 = [
  { src: "assets/G41.jpg" },
  { src: "assets/G42.jpg" },
  { src: "assets/G43.jpg" },
  { src: "assets/G44.jpg" },
  { src: "assets/G45.jpg" },
  { src: "assets/G46.jpg" },
 
  
];
const placeholderImages5 = [
  { src: "assets/G47.jpg" },
  { src: "assets/G48.jpg" },
  { src: "assets/G49.jpg" },
  { src: "assets/G50.jpg" },
  { src: "assets/G51.jpg" },
  { src: "assets/G52.jpg" },
 { src: "assets/G53.jpg" },
  { src: "assets/G54.jpg" },
  { src: "assets/G55.jpg" },
  { src: "assets/G56.jpg" },
  { src: "assets/G57.jpg" },
  { src: "assets/G58.jpg" },
 { src: "assets/G59.jpg" },
  { src: "assets/G60.jpg" },
  { src: "assets/G61.jpg" },
  { src: "assets/G62.jpg" },
  { src: "assets/G63.jpg" },
  { src: "assets/G64.jpg" },
  { src: "assets/G65.jpg" },
  { src: "assets/G66.jpg" },
  { src: "assets/G67.jpg" },
  
 
 
  
];
const placeholderImages6 = [
  { src: "assets/G68.jpg" },
  { src: "assets/G69.jpg" },
  { src: "assets/G70.jpg" },
  { src: "assets/G71.jpg" },
  { src: "assets/G72.jpg" },
  { src: "assets/G73.jpg" },
 { src: "assets/G74.jpg" },
  { src: "assets/G75.jpg" },
  { src: "assets/G76.jpg" },
  { src: "assets/G77.jpg" },
  { src: "assets/G78.jpg" },
  { src: "assets/G79.jpg" },
 { src: "assets/G80.jpg" },
  { src: "assets/G81.jpg" },
  { src: "assets/G82.jpg" },
  { src: "assets/G83.jpg" },
  { src: "assets/G84.jpg" },
  { src: "assets/G85.jpg" },
  
 
 
  
];
const placeholderImages7 = [
  { src: "assets/G86.jpg" },
  { src: "assets/G87.jpg" },
  { src: "assets/G88.jpg" },
  { src: "assets/G89.jpg" },
  { src: "assets/G90.jpg" },
  { src: "assets/G91.jpg" },
 { src: "assets/G92.jpg" },
  { src: "assets/G93.jpg" },
  { src: "assets/G94.jpg" },
  { src: "assets/G95.jpg" },
  { src: "assets/G96.jpg" },
  { src: "assets/G97.jpg" },
 { src: "assets/G98jpg" },
  { src: "assets/G99.jpg" },
  { src: "assets/G100.jpg" },
  { src: "assets/G101.jpg" },
  { src: "assets/G102.jpg" },
  { src: "assets/G103.jpg" },
  { src: "assets/G104.jpg" },
  { src: "assets/G105.jpg" },
  
 
 
  
];
const placeholderImages8 = [
  
  { src: "assets/G106.jpg" },
  { src: "assets/G107.jpg" },
  { src: "assets/G108.jpg" },
  { src: "assets/G109.jpg" },
 { src: "assets/G110jpg" },
  { src: "assets/G111.jpg" },
  { src: "assets/G112.jpg" },
  { src: "assets/G113.jpg" },
  
 
 
  
];
const placeholderImages9 = [
  
  { src: "assets/G114.jpg" },
  { src: "assets/G115.jpg" },
  { src: "assets/G116.jpg" },
  { src: "assets/G117.jpg" },
 { src: "assets/G118.jpg" },
  { src: "assets/G119.jpg" },
  { src: "assets/G120.jpg" },
  { src: "assets/G121.jpg" },
  { src: "assets/G122.jpg" },
  { src: "assets/G123.jpg" },
 { src: "assets/G124.jpg" },
  { src: "assets/G125.jpg" },
  { src: "assets/G126.jpg" },
  { src: "assets/G127.jpg" },
  
 
 
  
];
const placeholderImages10 = [
  
  { src: "assets/G128.jpg" },
  
  
 
 
  
];



const galleryAlbums = [
  { title: '2024 OTV News on Bahrain Odia Samaj Utkala Diwas Celebration', images: placeholderImages },
  { title: '2019 Annual Function of DevLoka Public School', images: placeholderImages1 },
  { title: '2019 Annual Function of DevLoka Public School', images: placeholderImages1 },
  { title: '2019 Annual Function of DevLoka Public School', images: placeholderImages1 },
  { title: '2019 Annual Function of DevLoka Public School', images: placeholderImages1 },
  { title: '8th CII Global Summit on Skill Development held at Lucknow, Uttar Pradesh', images: placeholderImages1 },
  { title: '78 th Utkal Divas Celebration at Mumbai Utkal Samiti', images: placeholderImages2 },
  { title: 'Annual Function 2016', images: placeholderImages3 },
  { title: 'Attaining Various Functions June 19, 2012', images: placeholderImages4 },
  { title: 'Awards and Felicitations December 5, 2006', images: placeholderImages5 },
  { title: 'BGT Blood Donation To Cancer Patients August 11, 2012', images: placeholderImages6 },
  { title: 'BGT Felicitations By Dev Mohanty December 5, 2010', images: placeholderImages7 },
  { title: 'BGT Flecitation August 15, 2012', images: placeholderImages8 },
 { title: 'BGT Pana On Odia New Year August 14, 2012', images: placeholderImages9},
  { title: 'Eye Camp Organised By Braj Gouri Trust November 4, 2012', images: placeholderImages10},
  { title: 'Felicitated By Tata Memorial Hospital June 19,2012', images: placeholderImages6 },
  { title: 'Felicitating Old Age People June 19,2012', images: placeholderImages7 },
  { title: 'Felicitating Schools for Excellent Performance June 19,2012', images: placeholderImages8 },
 { title: 'Felicited By Pravashi Odia people At Qatar June 19, 2011', images: placeholderImages9},
  { title: 'Flood Activities in Odisha by BGT Volunteers August, 2011', images: placeholderImages10},
   { title: 'King Of Jagannath Temple Visit To Camp Mahbouls On 6- Apr-2013', images: placeholderImages10},
  { title: 'Media Cliping September 10, 2012', images: placeholderImages6 },
  { title: 'Memorable Event Of Kaguramarg Rath Yatra', images: placeholderImages7 },
  { title: 'Mumbai Ratha Yatra-2011 August 4,2011', images: placeholderImages8 },
 { title: 'Odisha Mohostav 2010 June 19, 2012', images: placeholderImages9},
  { title: 'Philanthropic Services of BGT August 11, 2012', images: placeholderImages10},
   { title: 'Presidential Election at Mumbai Utkal Samiti', images: placeholderImages10},
  { title: 'Providing Financial Assistance To The Victims Of fire Accident June 19,2012', images: placeholderImages6 },
  { title: 'Riyadh Odiya Social Organisation Function December 10, 2012', images: placeholderImages7 },
  { title: 'ROSA 6th Annual Day Function On 21-NOV-2014', images: placeholderImages8 },
 { title: 'Sanskar During Emergency By BGT Volunteers February 4, 2011', images: placeholderImages9},
  { title: 'Senior Citizen Felicitation August 6,2012', images: placeholderImages10},
  { title: 'Student Scholarship June 19,2012', images: placeholderImages7 },
  { title: 'Tata Hospital Service by BGT Volunteers December 5, 2006', images: placeholderImages8 },
 { title: 'World Peace Organisation, Sukarpada June 19,2012', images: placeholderImages9},
  { title: 'Yoga for Cancer Patient August 10, 2012', images: placeholderImages10},
 
];

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [albumTitle, setAlbumTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAlbum = (album) => {
    setSlides(album.images);
    setAlbumTitle(album.title);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="py-20 px-6 min-h-screen" style={{ backgroundColor: "#996633" }}>
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-100 mb-12 font-serif tracking-wide">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryAlbums.map((album, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            style={{ backgroundColor: "#855C2F" }}
            onClick={() => openAlbum(album)}
          >
            <div className="w-full h-48 bg-[#704A24] flex items-center justify-center">
              <img src={album.images[0].src} alt="Album thumbnail" className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h3 className="text-white text-sm font-semibold text-center leading-snug">
                {album.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          <h2 className="text-white text-lg md:text-2xl font-semibold mb-4 text-center">{albumTitle}</h2>

          {/* Main Image */}
          <div className="relative max-w-4xl w-full mb-4">
            <img
              src={slides[currentIndex].src}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
            />

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentIndex((currentIndex + slides.length - 1) % slides.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4"
            >
              &#10094;
            </button>
            <button
              onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4"
            >
              &#10095;
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto max-w-full px-4">
            {slides.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${
                  currentIndex === idx ? "border-white" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
