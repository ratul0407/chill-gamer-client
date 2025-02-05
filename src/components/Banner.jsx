import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import remoteImg from "../assets/remote.jpg";
import wukongImg from "../assets/Black-Myth-Wukong.png";

import forzaImg from "../assets/forza-hot-wheels.jpg";

function Banner() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <figure>
            <img className="h-[60vh] object-cover  w-full" src={remoteImg} />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img
              className="h-[60vh] object-cover object-top   w-full"
              src={forzaImg}
            />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img className="h-[60vh] object-cover  w-full" src={wukongImg} />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
