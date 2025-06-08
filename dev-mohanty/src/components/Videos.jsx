import React, { useState } from 'react';

const videos = [
  {
    url: "https://www.youtube.com/watch?v=uNzbEj4v4X8&t=15s",
    title: "Sample YouTube Video",
  },
  {
    url: "https://www.youtube.com/watch?v=rbs8uh6bM0E",
    title: "Sample MP4 Video 1",
  },
  {
    url: "https://www.youtube.com/watch?v=NQm6wO4x1Ro",
    title: "Sample MP4 Video 2",
    
  },
  {
    url: "https://www.youtube.com/watch?v=RRBab0ecgxY",
    title: "Sample MP4 Video 2",
    
  },
  {
    url: "https://www.youtube.com/watch?v=MDbploHtflo",
    title: "Sample MP4 Video 2",
    
  },
  {
    url: "https://www.youtube.com/watch?v=RUlU2jYFEl0",
    title: "Sample MP4 Video 2",
    
  },
  {
    url: "https://www.youtube.com/watch?v=azXZwgsj0vI",
    title: "Sample MP4 Video 2",
    
  },
];

const getYouTubeEmbedURL = (url) => {
  const match = url.match(/(?:youtube\.com.*(?:\?v=|\/embed\/)|youtu\.be\/)([^&\n?#]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const VideoBarSlider = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? videos.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === videos.length - 1 ? 0 : index + 1);
  };

  const handleThumbnailClick = (idx) => {
    setIndex(idx);
  };

  const currentVideo = videos[index];
  const isYouTube = currentVideo.url.includes("youtube.com") || currentVideo.url.includes("youtu.be");
  const embedURL = isYouTube ? getYouTubeEmbedURL(currentVideo.url) : null;

  return (
    <div id="videos" className="py-10 px-4 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-center mb-10 font-serif tracking-wide">
        Videos
      </h2>

      {/* Main Video */}
      <div className="relative mt-4 mb-8 flex justify-center items-center w-full max-w-4xl">
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:left-4 text-yellow-400 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
        >
          ❮
        </button>

        <div className="w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] rounded-lg shadow-lg border-2 border-yellow-400 overflow-hidden">
          {isYouTube ? (
            <iframe
              src={embedURL}
              title="YouTube video player"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <video
              controls
              src={currentVideo.url}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-4 text-yellow-400 bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-white transition"
        >
          ❯
        </button>
      </div>

      {/* Video Title */}
      <h3 className="text-2xl text-yellow-300 font-semibold mb-6">
        {currentVideo.title}
      </h3>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto justify-center">
        {videos.map((video, idx) => {
          const isYT = video.url.includes("youtube.com") || video.url.includes("youtu.be");
          const thumbSrc = isYT
            ? `https://img.youtube.com/vi/${getYouTubeEmbedURL(video.url)?.split("/").pop()}/0.jpg`
            : video.url;

          return (
            <img
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              src={thumbSrc}
              alt={`Video ${idx + 1}`}
              className={`w-28 h-16 rounded-md object-cover cursor-pointer border-2 ${
                idx === index ? "border-yellow-400" : "border-gray-400"
              } hover:border-yellow-400 transition`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideoBarSlider;
