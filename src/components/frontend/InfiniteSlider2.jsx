"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"; // Ensure you have the necessary CSS for Swiper

// Data for the second slider
const newSliderData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1728297644019-5f49a560b4d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image source
    name: "John Doe",
    mainText: "Web Developer",
    text: "Innovating web solutions that drive results.",
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1728923434154-e40f064b89c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    mainText: "UI/UX Designer",
    text: "Creating intuitive user interfaces that users love.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1733933043078-f9429d194fbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Johnson",
    mainText: "Frontend Specialist",
    text: "Passionate about clean and effective frontend designs.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1733398378174-a8f3b1559451?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    mainText: "Product Manager",
    text: "Managing projects to deliver world-class products.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1732740676396-ece9a9148342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Lee",
    mainText: "Backend Developer",
    text: "Developing robust backend solutions that scale.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1733173523386-3006dec1a835?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Wilson",
    mainText: "Data Analyst",
    text: "Using data to drive innovation and success.",
  },
];

export default function SecondSlider() {
  return (
    <div className="w-full bg-white py-16 lg:py-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
        Meet Our Professionals
      </h1>

      {/* Second Slider */}
      <Swiper
        spaceBetween={20} // Gap between cards
        slidesPerView={1}
        centeredSlides={false}
        loop={true} // Infinite loop of the slides
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }, // Adjusting for 4 items on desktop
        }}
        modules={[Autoplay]} // Enabling the Autoplay module
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {newSliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white transition-transform duration-300 ease-in-out transform hover:scale-110 ">
              <img
                src={slide.img}
                alt={slide.name}
                className="w-28 h-28 rounded-full border-4 border-indigo-500 mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{slide.mainText}</h2>
              <p className="text-sm text-gray-600 text-center">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
