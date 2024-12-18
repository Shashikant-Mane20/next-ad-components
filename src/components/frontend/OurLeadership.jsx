"use client";
import { useState } from "react";

const membersData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Director",
    image: "/images/1920x1080.jpg",
    info: "John has over 20 years of experience in management and innovation. He is passionate about leadership and organization growth.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Assistant Director",
    image: "/images/1920x1080.jpg",
    info: "Jane is known for her exceptional people management skills and strategic thinking.",
  },
  {
    id: 3,
    name: "Michael Brown",
    designation: "Board Member",
    image: "/images/1920x1080.jpg",
    info: "Michael is an expert in financial strategy with more than 15 years in the industry.",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(membersData[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
        
      {/* Section 1: List of Members */}
      <div className="w-full md:w-1/3 mt-10">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Leadership</h2>

        {/* Board of Directors */}
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Board of Directors</h3>
        <ul className="space-y-3">
          {membersData.map((member) => (
            <li
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className={`p-2 rounded-lg cursor-pointer text-center transition-all duration-300 hover:bg-gray-200 ${
                selectedMember.id === member.id ? "bg-gray-300 font-bold" : ""
              }`}
            >
              <h3 className="text-lg text-gray-800 text-start">{member.name}</h3>
              <p className="text-sm text-gray-600 text-start">{member.designation}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Member Details */}
      {/* <div className="w-full md:w-2/3 bg-white rounded-lg overflow-hidden">
        <img
          src={selectedMember.image}
          alt={selectedMember.name}
          className="w-full h-85 object-cover"
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h3>
          <p className="text-sm text-gray-600 font-semibold mb-2">{selectedMember.designation}</p>
          <p className="text-gray-700">{selectedMember.info}</p>
        </div>
      </div> */}

      {/* Section 2: Member Details */}
<div className="w-full md:w-2/3 bg-white overflow-hidden relative">
  <img
    src={selectedMember.image}
    alt={selectedMember.name}
    className="w-full h-85 object-cover"
  />
  <div className="p-4 absolute bottom-0 left-0 right-0 bg-[#1A365B] bg-opacity-50 text-white">
    <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
    <p className="text-sm font-semibold mb-2">{selectedMember.designation}</p>
    <p className="text-opacity-80">{selectedMember.info}</p>
  </div>
</div>

    </div>
  );
}

