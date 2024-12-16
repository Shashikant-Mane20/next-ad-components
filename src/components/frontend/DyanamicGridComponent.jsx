"use client";
import { useState } from "react";

const DynamicGridComponent = () => {
  const items = [
    {
      id: 1,
      text: "Reliability Engineering",
      image: "https://plus.unsplash.com/premium_photo-1664391627111-1e54a9ab358e?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Reliability Engineering focuses on enhancing the dependability of equipment and systems in industrial plants. This helps reduce downtime and ensures optimal plant performance.",
    },
    {
      id: 2,
      text: "Predictive Maintenance",
      image: "https://plus.unsplash.com/premium_photo-1674677788210-ea8be01cd424?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Predictive Maintenance involves analyzing equipment data to anticipate failures before they happen, saving costs and increasing equipment lifespan.",
    },
    {
      id: 3,
      text: "Plant Management",
      image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Plant Asset Management (AAET) includes monitoring and improving the performance of machines, assets, and infrastructure within a manufacturing plant.",
    },
    {
      id: 4,
      text: "Quality Management & ISO",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Quality Management ensures products and services meet specified standards, adhering to ISO guidelines for efficient, standardized processes.",
    },
    {
      id: 5,
      text: "Training & Development",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Training and Development involves empowering employees with skills and certifications in areas like plant operations, energy management, and predictive maintenance.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore Our Expertise
        </h1>

        {/* Button List (responsive) */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`px-4 py-3 transition rounded-md ${
                selectedItem.id === item.id
                  ? "bg-[#1A365B] text-white"
                  : "bg-[#EEEEEE] text-gray-800 hover:bg-gray-300"
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        {/* Detail Section (responsive) */}
        <div className="bg-white shadow-lg flex flex-col lg:flex-row items-start lg:items-center p-6 lg:p-8 space-y-6 lg:space-y-0">
          {/* Text Info */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {selectedItem.text}
            </h2>
            <p className="text-gray-600">{selectedItem.description}</p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/3 pl-0 lg:pl-4">
            <img
              src={selectedItem.image}
              alt={selectedItem.text}
              className="w-full h-64 lg:h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicGridComponent;
