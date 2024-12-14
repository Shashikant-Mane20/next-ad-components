"use client";

export default function BannerWithBrochure() {
  return (
    <div className="relative w-full h-[38vh] bg-gray-300 flex items-center justify-center px-8 md:px-0">
      {/* Banner Image */}
      <img
        src="https://arrelic.com/frontend/media/brochures-bg.webp"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Circle on the banner */}
      <div className="absolute -top-28 left-[260px] bg-white rounded-full overflow-hidden h-64 w-64 flex justify-center items-center shadow-lg">
        <img
          src="https://arrelic.com/frontend/media/brochures-catalogues.png"
          alt="Circle Image"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Brochure and Catalogue Section */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-[30%] text-center md:top-1/2 md:left-[55%] md:transform md:-translate-y-1/2 md:text-left">
        <p className="text-xl font-semibold text-white mb-3">Brochure and Catalogue</p>
        <button className="mt-3 px-8  bg-blue-600 text-white text-base rounded-md shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Download
        </button>
      </div>
    </div>
  );
}
