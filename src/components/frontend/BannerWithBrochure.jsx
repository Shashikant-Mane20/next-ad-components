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
      <div className="absolute top-[-116px] left-[70px] md:left-[20%] rounded-full overflow-hidden h-64 w-64 flex justify-center items-center">
        <img
        //   src="https://arrelic.com/frontend/media/brochures-catalogues.png"
        src="images/brochures-catalogues.png"
          alt="Circle Image"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Brochure and Catalogue Section */}
      <div className="absolute bottom-14 left-[150px] transform -translate-x-[30%] text-center md:top-[76px] md:left-[55%] md:transform md:-translate-y-1/2 md:text-left items-center md:items-center">
        <p className="text-xl font-semibold text-white mb-3">Brochure and Catalogue</p>
        <button className="mt-3 px-8  bg-[#0E8CC5] text-white text-base shadow-lg hover:bg-[#004767] transition-transform transform hover:scale-105">
          Download
        </button>
      </div>

      {/* Responsive Section Below the Banner Image */}
      <div className="mt-8 md:hidden">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://arrelic.com/frontend/media/brochures-catalogues.png"
            alt="Banner Image"
            className="w-full h-[200px] object-cover rounded-md mb-4"
          />
         
        </div>
      </div>
    </div>
  );
}

