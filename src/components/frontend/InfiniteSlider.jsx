"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const sliderData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1496989981497-27d69cdad83e?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    text: "Innovative and dynamic solutions.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    text: "Empowering your success stories.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Johnson",
    text: "Leading the change in tech.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1550275994-cdc89cd1948f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    text: "Creativity at its finest.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Lee",
    text: "Building dreams into reality.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1561835503-648c2f1169d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shashikant Mane",
    text: "Don't stop chasing your dreams.",
  },
];

export default function SimpleSlider() {
  return (
    <div className="w-full bg-white py-16 px-4 lg:py-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">Our Team</h1>
      <Swiper
        spaceBetween={16} // Swiper's internal spacing set to a small number
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 }, // Showing 2 cards on small screens
          768: { slidesPerView: 3 }, // Showing 3 cards on tablets
          1024: { slidesPerView: 5 }, // Showing 5 cards on large screens
        }}
        modules={[Autoplay]}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"> {/* Tailwind gap between cards */}
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-blue-950 shadow-2xl h-[350px] w-[245px]">
                <img
                  src={slide.img}
                  alt={slide.name}
                  className="w-28 h-28 rounded-full border-4 border-indigo-500 mb-4 object-cover"
                />
                <h2 className="text-lg font-semibold text-white mb-2">{slide.name}</h2>
                <div className="w-12 h-[2px] bg-indigo-500 mb-3"></div>
                <p className="text-sm text-gray-600 text-center">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
