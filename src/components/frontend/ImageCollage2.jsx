
// "use client";

// export default function CustomImageCollage() {
//   const images = [
//     {
//       url: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Zoom In on Hover",
//       section: false,
//     },
//     {
//       url: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Slide to Expand",
//       section: true,
//     },
//     {
//       url: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Another Slide to Expand",
//       section: true,
//     },
//   ];

//   return (
//     <div className="flex justify-center gap-6 p-6 flex-wrap">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`relative group w-full sm:w-1/3 md:w-1/3`}
//         >
//           {/* First image: zoom-in effect with opacity */}
//           {image.section === false ? (
//             <div className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg">
//               <img
//                 src={image.url}
//                 alt={image.text}
//                 className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-80"
//               />
//               <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transition-all duration-300 transform group-hover:translate-y-[-5px]">
//                 {image.text}
//               </span>
//             </div>
//           ) : (
//             <div className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg">
//               {/* Second Image or Third Image with Slide Effect */}
//               <div className="flex w-full h-full">
//                 <div
//                   className="w-1/3 bg-white h-full absolute top-0 left-0 z-10 overflow-hidden transform group-hover:w-full transition-all duration-500 ease-in-out"
//                 >
//                   <div className="h-full w-full flex items-center justify-center text-center p-4">
//                     <p className="text-lg font-semibold text-black">{image.text}</p>
//                   </div>
//                 </div>
//                 <img
//                   src={image.url}
//                   alt={image.text}
//                   className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// "use client";

// export default function CustomImageCollage() {
//   const images = [
//     {
//       url: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Zoom In on Hover",
//       section: false,
//     },
//     {
//       url: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Slide to Expand",
//       section: true,
//       slideDirection: "right",  // New key to control slide direction
//     },
//     {
//       url: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Another Slide to Expand",
//       section: true,
//       slideDirection: "left", // New key to control slide direction
//     },
//   ];

//   return (
//     <div className="flex justify-center gap-6 p-6 flex-wrap">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`relative group w-full sm:w-1/3 md:w-1/3`}
//         >
//           {/* First image: zoom-in effect with opacity */}
//           {image.section === false ? (
//             <div className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg">
//               <img
//                 src={image.url}
//                 alt={image.text}
//                 className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110 group-hover:opacity-80"
//               />
//               <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transition-all duration-300 transform group-hover:translate-y-[-5px]">
//                 {image.text}
//               </span>
//             </div>
//           ) : (
//             <div className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg">
//               {/* Second Image or Third Image with Slide Effect */}
//               <div className="flex w-full h-full">
//                 {/* Dynamic left/right slide based on `slideDirection` */}
//                 <div
//                   className={`${
//                     image.slideDirection === "right" ? "right-0" : "left-0"
//                   } w-1/3 bg-white h-full absolute top-0 z-10 overflow-hidden transform group-hover:w-full transition-all duration-500 ease-in-out`}
//                 >
//                   <div className="h-full w-full flex items-center justify-center text-center p-4">
//                     <p className="text-lg font-semibold text-black">{image.text}</p>
//                   </div>
//                 </div>
//                 <img
//                   src={image.url}
//                   alt={image.text}
//                   className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

export default function CustomImageCollage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Zoom In on Hover",
      section: false,
    },
    {
      url: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Slide to Expand",
      section: true,
      slideDirection: "right", // Slide from the right for second image
    },
    {
      url: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Another Slide to Expand",
      section: true,
      slideDirection: "left", // Slide from the left for third image
    },
  ];

  return (
    <div className="flex justify-center gap-6 p-6 flex-wrap">
      {images.map((image, index) => (
        <div key={index} className={`relative group w-full sm:w-1/3 md:w-1/3`}>
          {/* First image: zoom-in effect with opacity */}
          {image.section === false ? (
            <div className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.text}
                className="w-full h-full object-cover transform scale-110 opacity-80 transition-all duration-300"
              />
              <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transition-all duration-300 transform group-hover:translate-y-[-5px]">
                {image.text}
              </span>
            </div>
          ) : (
            <div className="relative group h-80 w-full overflow-hidden rounded-lg shadow-lg">
              {/* Second Image or Third Image with Slide Effect */}
              <div className="flex w-full h-full">
                {/* Dynamic left/right slide based on `slideDirection` */}
                <div
                  className={`${
                    image.slideDirection === "right" ? "right-0" : "left-0"
                  } w-1/3 bg-white h-full absolute top-0 z-10 overflow-hidden transform group-hover:w-full transition-all duration-500 ease-in-out`}
                >
                  {/* Text and Background Image with opacity */}
                  <div className="h-full w-full flex items-center justify-center text-center p-4 relative">
                    {/* On hover, the background image will appear with opacity */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                      style={{
                        backgroundImage: `url(${image.url})`,
                      }}
                    />
                    <p className="text-lg font-semibold text-black relative z-10">
                      {image.text}
                    </p>
                  </div>
                </div>
                <img
                  src={image.url}
                  alt={image.text}
                  className="w-full h-full object-cover opacity-70 transform scale-110 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
