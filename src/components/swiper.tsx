import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Props = {};

const Slider: React.FC<Props> = ({}: Props) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
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
    </Swiper>
  );
};

export default Slider;
