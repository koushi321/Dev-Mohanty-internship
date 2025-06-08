import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";

const images = Array.from({ length: 20 }, (_, i) => `assets/M${i + 1}.jpg`);

const Media = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [isZoomed, setIsZoomed] = React.useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div id="media" className="w-full bg-[#996633] py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-10 tracking-wide drop-shadow-md">
          Media
        </h2>

        <p className="text-gray-300 text-md sm:text-lg leading-relaxed mb-12">
          The Print media as well as the Television of Odisha as well as Mumbai
          also covering the philanthropic activities done by Braj Gauri Trust
          in various times.
        </p>

        {/* Main Swiper */}
        <div className="relative bg-black rounded-lg shadow-lg overflow-hidden transition-all duration-300">
          {/* Zoom Button Only */}
          <div className="absolute top-4 left-4 z-10">
            <button
              onClick={toggleZoom}
              className="bg-gray-700 p-2 rounded hover:bg-yellow-400 transition"
              title={isZoomed ? "Minimize" : "Maximize"}
            >
              {isZoomed ? (
                <FaSearchMinus className="text-white" />
              ) : (
                <FaSearchPlus className="text-white" />
              )}
            </button>
          </div>

          <Swiper
            spaceBetween={10}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className={`h-96 transition-transform duration-300 ${
              isZoomed ? "scale-150 cursor-zoom-out" : ""
            }`}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={`main-${idx}`}>
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
            <button className="prev-button bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition">
              <FaChevronLeft className="text-white" />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
            <button className="next-button bg-gray-700 p-2 rounded-full hover:bg-yellow-400 transition">
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>

        {/* Thumbnail Swiper */}
        <div className="mt-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="h-24"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={`thumb-${idx}`}>
                <img
                  src={img}
                  alt={`Thumb ${idx + 1}`}
                  className="object-cover h-full w-full rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Media;
