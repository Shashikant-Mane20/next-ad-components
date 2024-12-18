
"use client";

import { useState } from "react";

const ThreeSectionHover = () => {
  // Background images
  const images = [
    "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [bgImage, setBgImage] = useState("");

  return (
    <div
      className="relative h-screen flex flex-col md:flex-row justify-around items-center transition-all duration-700 overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Section 1 */}
      <div
        className="w-full md:w-1/3 h-1/3 md:h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-3xl font-bold cursor-pointer transition-all duration-500"
        
        onMouseEnter={() => setBgImage(images[0])}
        onMouseLeave={() => setBgImage("")}
      >
        Section 1
      </div>

      {/* Section 2 */}
      <div
        className="w-full md:w-1/3 h-1/3 md:h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-3xl font-bold cursor-pointer transition-all duration-500"
        onMouseEnter={() => setBgImage(images[1])}
        onMouseLeave={() => setBgImage("")}
      >
        Section 2
      </div>

      {/* Section 3 */}
      <div
        className="w-full md:w-1/3 h-1/3 md:h-full flex justify-center items-center bg-black bg-opacity-50 text-white text-3xl font-bold cursor-pointer transition-all duration-500"
        onMouseEnter={() => setBgImage(images[2])}
        onMouseLeave={() => setBgImage("")}
      >
        Section 3
      </div>

      {/* Overlay for Smooth Transparent Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-25 pointer-events-none"></div>
    </div>
  );
};

export default ThreeSectionHover;

