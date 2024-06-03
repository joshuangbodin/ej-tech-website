import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

type Props = {};

const Slider: React.FC<Props> = ({}: Props) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      spaceBetween={30}

      effect="fade"
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="graphics2.jpg" className="img" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="code3.jpg" className="img" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image4.jpg" className="img" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image1.jpg" className="img1" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="graphics2.jpg" className="img" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="code3.jpg" className="img" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image4.jpg" className="img" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="image1.jpg" className="img1" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
