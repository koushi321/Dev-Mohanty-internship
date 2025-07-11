// src/components/SocialMedia.jsx
import React from "react";
import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="bg-[##996633] py-8">
      <div className="flex justify-center space-x-6">
        {/* Twitter Button */}
        <a
          href="https://x.com/#!/DevLokaMohanty"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-400 hover:bg-blue-500 p-4 rounded-full text-2xl transition-colors duration-300"
        >
          <FaTwitter />
        </a>

        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/dev.l.mohanty/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 p-4 rounded-full text-2xl transition-colors duration-300"
        >
          <FaFacebookF />
        </a>

        {/* Google Plus Button */}
        <a
          href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-600 p-4 rounded-full text-2xl transition-colors duration-300"
        >
          <FaGooglePlusG />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
