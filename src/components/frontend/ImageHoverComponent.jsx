"use client";
import { useState } from "react";

const ImageHoverComponent = () => {
  // Data for images and button texts
  const items = [
    {
      id: 1,
      text: "Reliability Engineering",
      image: "https://plus.unsplash.com/premium_photo-1664391627111-1e54a9ab358e?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      text: "Predictive Maintenance",
      image: "https://plus.unsplash.com/premium_photo-1674677788210-ea8be01cd424?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      text: "Training & Development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative group bg-white shadow-lg overflow-hidden"
          >
            {/* Image with zoom effect */}
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Button (fixed, no zoom effect) */}
            <div className="absolute bottom-7 left-6 right-18 text-center">
              <button className="px-4 py-2 bg-[#03BFCB] text-white font-semibold rounded-sm">
           
                <span className="w-full transition-transform duration-300 group-hover:translate-x-4">
                
                </span>
                {item.text}
                <span className="absolute inset-0 bg-[#1A365B] transition-all duration-300 group-hover:translate-x-4">
           
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHoverComponent;

