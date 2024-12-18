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
//       slideDirection: "right", // Slide from the right for second image
//     },
//     {
//       url: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       text: "Another Slide to Expand",
//       section: true,
//       slideDirection: "left", // Slide from the left for third image
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-0 gap-0">
//       {/* Left Section: Adjusted Height and Width for Smaller Image */}
//       <div className="relative group col-span-1 h-[800px] w-full overflow-hidden">
//         <img
//           src={images[0].url}
//           alt={images[0].text}
//           className="w-full h-full object-cover transform scale-110 opacity-100 transition-all duration-300"
//         />
//         <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transition-all duration-300 transform group-hover:translate-y-[-5px]">
//           {images[0].text}
//         </span>
//       </div>

//       {/* Right Section: Two Stacked Images with Equal Height */}
//       <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col p-0">
//         {images.slice(1).map((image, index) => (
//           <div key={index} className="relative group h-[400px] w-full overflow-hidden">
//             {/* Dynamic left/right slide based on `slideDirection` */}
//             <div
//               className={`${
//                 image.slideDirection === "right" ? "right-0" : "left-0"
//               } w-1/3 bg-white h-full absolute top-0 z-10 overflow-hidden transform group-hover:w-full transition-all duration-500 ease-in-out`}
//             >
//               {/* Text and Background Image with opacity */}
//               <div className="h-full w-full flex items-center justify-center text-center p-4 relative">
//                 {/* On hover, the background image will appear with opacity */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{
//                     backgroundImage: `url(${image.url})`,
//                   }}
//                 />
//                 <p className="text-lg font-semibold text-black relative z-10">
//                   {image.text}
//                 </p>
//               </div>
//             </div>
//             <img
//               src={image.url}
//               alt={image.text}
//               className="w-full h-full object-cover opacity-100 transform scale-110 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
//             />
//           </div>
//         ))}
//       </div>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-0 gap-0">
      {/* Left Section: Adjusted Height and Width for Smaller Image */}
      <div className="relative group col-span-1 h-[800px] w-full overflow-hidden">
        <img
          src={images[0].url}
          alt={images[0].text}
          className="w-full h-full object-cover transform scale-110 opacity-100 transition-all duration-300"
        />
        <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transition-all duration-300 transform group-hover:translate-y-[-5px]">
          {images[0].text}
        </span>
      </div>

      {/* Right Section: Two Stacked Images with Equal Height */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col p-0">
  {images.slice(1).map((image, index) => (
    <div
      key={index}
      className="relative group h-[400px] w-full overflow-hidden"
    >
      {/* Sliding panel with transparency */}
      <div
        className={`absolute top-0 h-full w-[50%] bg-white ${
          image.slideDirection === "right" ? "right-0" : "left-0"
        } w-1/3 z-10 group-hover:w-full group-hover:bg-white/30 transition-all duration-700 ease-in-out`}
      ></div>

      {/* Fixed text: stays in place but moves slightly upward on hover */}
      <p className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-black z-20 transition-transform duration-300 group-hover:translate-y-[-10px]">
        {image.text}
      </p>

      {/* Background image zooms smoothly */}
      <img
        src={image.url}
        alt={image.text}
        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
    </div>
  ))}
</div>

    </div>
  );
}

