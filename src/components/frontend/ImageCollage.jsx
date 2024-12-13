"use client";

export default function RefinedImageCollage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1733011467286-fbb0a599c466?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Adventure Awaits",
    },
    // {
    //   url: "https://images.unsplash.com/photo-1733667917612-319793fc3f7b?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   text: "Nature's Beauty",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1733653858484-739a74aae0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   text: "City Lights",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1733667916512-e65d9f605c90?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   text: "Peaceful Evenings",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1724487312072-0137edd63e61?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   text: "Wilderness Explorer",
    // },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {/* Left column (2 images) */}
      <div className="flex flex-col gap-6 w-full sm:w-1/2 lg:w-1/3">
        {images.slice(0, 2).map((image, index) => (
          <div
            key={index}
            className="relative group h-80 w-full overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.text}
              className="w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-300 ease-in-out"
            />
            <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transform group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              {image.text}
            </span>
          </div>
        ))}
      </div>

      {/* Right column (3 images) */}
      <div className="flex flex-col gap-6 w-full sm:w-1/2 lg:w-2/3">
        {images.slice(2).map((image, index) => (
          <div
            key={index}
            className="relative group h-52 w-full overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.text}
              className="w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-300 ease-in-out"
            />
            <span className="absolute bottom-4 right-4 text-white text-lg font-semibold transform group-hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              {image.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

