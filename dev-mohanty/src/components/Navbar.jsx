import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-[#704A24] bg-gradient-to-b from-white/10 to-transparent shadow-md backdrop-blur-sm z-50'>

      {/* Left - Logo and Icon */}
      <div className='flex items-center sm:gap-x-4 gap-x-2'>
        <a href='#' className='md:text-2xl sm:text-xl text-lg font-semibold text-white tracking-wide hover:scale-105 transition-transform duration-300'>
          Dev Mohanty
        </a>
        <i className='bx bx-sun md:text-3xl sm:text-2xl text-xl text-white sm:ml-4 ml-2 cursor-pointer hover:text-yellow-400 transition-colors duration-300'></i>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className='block md:hidden'>
        <button onClick={toggleMenu} className='text-white text-3xl'>
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <div className='hidden md:flex items-center'>
        {[
          { label: "Home", href: "#" },
          { label: "Biography", href: "#biography" },
          { label: "Social Responsibility", href: "#social-responsibility" },
          { label: "Awards", href: "#awards" },
          { label: "Media", href: "#media" },
          { label: "Videos", href: "#videos" },
          { label: "Gallery", href: "#gallery" },
          { label: "Connect", href: "#connect" }
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`group lg:text-lg md:text-base text-sm font-light text-white lg:mr-12 mr-8 tracking-wide relative`}
          >
            {label}
            <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300`}></span>
          </a>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#704A24] bg-gradient-to-b from-white/10 to-transparent text-white text-center md:hidden shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Home</a>
            <a href="#biography" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Biography</a>
            <a href="#social-responsibility" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Social Responsibility</a>
            <a href="#awards" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Awards</a>
            <a href="#media" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Media</a>
            <a href="#videos" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Videos</a>
            <a href="#gallery" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Gallery</a>
            <a href="#connect" className="text-white text-base font-light hover:text-yellow-300 transition duration-300">Connect</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
