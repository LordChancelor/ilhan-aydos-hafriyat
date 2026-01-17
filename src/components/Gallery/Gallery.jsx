import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { sliderImages } from "../../assets/sliderImages.js";

const Gallery = () => {
  return (
    <div className="bg-[#1f1f1f] border-2 border-yellow-500 rounded-xl p-6 shadow-lg">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1} // ✅ Show 2 slides even on mobile
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 2, // Show 2 on mobile
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="pt-6 pb-10"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
          <div className="w-full aspect-square overflow-hidden rounded-xl">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        
        
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
