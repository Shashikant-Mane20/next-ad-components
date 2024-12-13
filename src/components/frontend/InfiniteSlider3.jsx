// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// // Data for the sections
// const sectionData = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section One",
//     description: "Explore the features of Section One.",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Two",
//     description: "Explore the features of Section Two.",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Three",
//     description: "Explore the features of Section Three.",
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1733667916512-e65d9f605c90?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Four",
//     description: "Explore the features of Section Four.",
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1724487312072-0137edd63e61?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Five",
//     description: "Explore the features of Section Five.",
//   }
// ];

// export default function HoverEffectSlider() {
//   // State to track the hovered image
//   const [hoveredImage, setHoveredImage] = useState(null);

//   return (
//     <div
//       className="w-full py-16 bg-gray-50 relative"
//       style={{
//         backgroundImage: hoveredImage ? `url(${hoveredImage})` : "none",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         transition: "background-image 0.3s ease-in-out",
//       }}
//     >
//       <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 z-10 relative">
//         Discover Our Sections
//       </h1>

//       {/* Slider for sections */}
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={0} // No gap between slides
//         loop={true} // Infinite loop
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 }, // 4 items in a row on large screens
//         }}
//         className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         {sectionData.map((section) => (
//           <SwiperSlide key={section.id}>
//             <div
//               className="relative group"
//               onMouseEnter={() => setHoveredImage(section.img)}
//               onMouseLeave={() => setHoveredImage(null)}
//             >
//               {/* Background Section */}
//               <div
//                 className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
//                 style={{
//                   backgroundImage: hoveredImage
//                     ? `url(${section.img})`
//                     : "none",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   opacity: hoveredImage ? "0.8" : "0", // Opacity when hovered
//                 }}
//               ></div>

//               {/* Section Content */}
//               <div className="flex flex-col items-center p-6 bg-white shadow-md overflow-hidden relative z-10">
//                 <img
//                   src={section.img}
//                   alt={section.title}
//                   className="w-full h-72 object-cover mb-4 transition-all duration-500 transform group-hover:scale-105 group-hover:opacity-50"
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2">{section.description}</p>

//                 {/* Discover Button with Right Arrow */}
//                 <button className="mt-4 text-indigo-500 hover:text-indigo-700 font-semibold flex items-center">
//                   Discover
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     className="ml-2 w-5 h-5"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 14.293a1 1 0 011.414 0L16 9.707a1 1 0 010-1.414L11.707 4.707a1 1 0 00-1.414 1.414L13.586 8H3a1 1 0 010-2h10.586L10.293 4.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




// "use client";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const sectionData = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section One",
//     description: "Explore the features of Section One.",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Two",
//     description: "Explore the features of Section Two.",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Three",
//     description: "Explore the features of Section Three.",
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1733667916512-e65d9f605c90?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Four",
//     description: "Explore the features of Section Four.",
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1724487312072-0137edd63e61?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Section Five",
//     description: "Explore the features of Section Five.",
//   },
// ];

// export default function SharedHoverEffectSlider() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="w-full py-16 bg-gray-50">
//       <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
//         Discover Our Sections
//       </h1>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={0}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           768: { slidesPerView: 3 },
//           1024: { slidesPerView: 4 },
//         }}
//         className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//       >
//         {sectionData.map((section, index) => (
//           <SwiperSlide key={section.id}>
//             <div
//               className="relative group overflow-hidden rounded-lg border border-gray-300 shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div
//                 className="relative w-full h-[350px] bg-cover bg-center"
//                 style={{
//                   backgroundImage:
//                     hoveredIndex !== null
//                       ? `url(${sectionData[hoveredIndex].img})`
//                       : `url(${section.img})`,
//                 }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
//                   <h3 className="text-2xl font-semibold">{section.title}</h3>
//                   <p className="text-sm">{section.description}</p>
//                   <button className="mt-4 text-indigo-500 hover:text-indigo-700 font-semibold flex items-center">
//                     Discover
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       className="ml-2 w-5 h-5"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 14.293a1 1 0 011.414 0L16 9.707a1 1 0 010-1.414L11.707 4.707a1 1 0 00-1.414 1.414L13.586 8H3a1 1 0 010-2h10.586L10.293 4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sectionData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Section One",
    description: "Explore the features of Section One.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Section Two",
    description: "Explore the features of Section Two.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Section Three",
    description: "Explore the features of Section Three.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1733667916512-e65d9f605c90?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Section Four",
    description: "Explore the features of Section Four.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1724487312072-0137edd63e61?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Section Five",
    description: "Explore the features of Section Five.",
  },
];

export default function SharedHoverEffectSlider() {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="w-full py-16 bg-gray-50">
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
        Discover Our Sections
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {sectionData.map((section) => (
          <SwiperSlide key={section.id}>
            <div
              className="relative group overflow-hidden rounded-lg border border-gray-300 shadow-lg"
              onMouseEnter={() => setHoveredImage(section.img)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {/* Shared Background for All Cards */}
              <div
                className={`absolute inset-0 z-10 transition-opacity duration-500 ${
                  hoveredImage ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${hoveredImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Default Card Content */}
              <div className="relative w-full h-[350px] bg-cover bg-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.img})` }}
                ></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white text-center p-6 z-20">
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                  <p className="text-sm">{section.description}</p>
                  <button className="mt-4 text-indigo-500 hover:text-indigo-700 font-semibold flex items-center">
                    Discover
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-2 w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 14.293a1 1 0 011.414 0L16 9.707a1 1 0 010-1.414L11.707 4.707a1 1 0 00-1.414 1.414L13.586 8H3a1 1 0 010-2h10.586L10.293 4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
