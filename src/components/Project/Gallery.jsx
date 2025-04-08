import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Import slider images from your assets
import { sliderImages } from "../../assets/sliderImages.js";

const Gallery = () => {
  return (
    <div className="bg-[#1f1f1f] border-2 border-yellow-500 rounded-xl p-6 shadow-lg">
  <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 2000 }}
    navigation={true}
    breakpoints={{
      768: {
        slidesPerView: 3,
      },
    }}
    className="pt-6 pb-10"
  >
    {sliderImages.map((image, index) => (
      <SwiperSlide key={index}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full h-[400px] rounded-md object-cover shadow-md border border-gray-600"
        />
      </SwiperSlide>
    ))}
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="slider-image-container">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy" // SEO-friendly: Lazy load the images
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
