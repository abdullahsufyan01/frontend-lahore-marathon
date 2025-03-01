import React from 'react';
import { Timer } from 'lucide-react';
import logo from "../assets/images/lahore-marathon-logo.png"
import LahoreMarathonBanner from '../assets/images/LahoreMarathonBanner.jpg'

const Header = () => {
  return (
    <header
      className="relative text-white py-20"
      style={{
        background: "linear-gradient(135deg, rgba(0,154,82,0.95) 0%, rgba(16,207,110,0.9) 50%, rgba(6,139,68,0.95) 100%)",
      }}
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          // backgroundImage:`url(${LahoreMarathonBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // mixBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <div className="bg-white p-5 rounded-full mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <a href="https://lahore-marathon.com/" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-600 to-green-400">
              <img src={logo} alt="Lahore Marathon Logo"/>
              {/* <Timer className="w-14 h-14 text-white" /> */}
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center drop-shadow-lg mb-2 tracking-tight">
            Marathon Results
          </h1>
          <div className="w-32 h-1 bg-white rounded-full opacity-70 my-3"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white text-center max-w-2xl mb-10 font-light leading-relaxed">
          Find your race results instantly by entering your BIB number below
        </p>

        {/* Decorative Elements */}
        <div className="flex space-x-3 mb-4">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
      
      {/* Decorative Bottom Wave */}
      <div className="absolute left-0 right-0" style={{bottom:"-1px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;