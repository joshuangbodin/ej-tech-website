import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

type Props = {};

const sliderImages = [
  ["graphics2.jpg", "code3.jpg"], // top-left
  ["image4.jpg", "image1.jpg"],   // top-right
  ["code3.jpg", "graphics2.jpg"], // bottom-left
  ["image1.jpg", "image4.jpg"],   // bottom-right
];

const Slider: React.FC<Props> = ({}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {sliderImages.map((images, index) => (
        <div key={index} className="w-full h-72 md:h-80 rounded-xl overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000 + index * 500, // slight stagger
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            className="w-full h-full rounded-xl"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`slide-${index}-${i}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Slider;
