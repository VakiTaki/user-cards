import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { ChevronDoubleLeftIcon } from "@heroicons/react/20/solid";

function MainSlider() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={{
          nextEl: ".swiper-main-button-next",
          prevEl: ".swiper-main-button-prev",
        }}
        modules={[EffectFlip, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-full min-h-[50vh] bg-gray-100 border aspect-square rounded-md">
            Здесь карточка студента 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full min-h-[50vh] bg-gray-100 border  aspect-square rounded-md">
            Здесь карточка студента 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full min-h-[50vh] bg-gray-100 border aspect-square rounded-md">
            Здесь карточка студента 3
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" hidden sm:flex justify-between items-center py-2">
        <button className="swiper-main-button-prev">
          <ChevronDoubleLeftIcon className=" w-10 h-10 hover:fill-slate-600 transition duration-300" />
        </button>
        <button className="swiper-main-button-next">
          <ChevronDoubleLeftIcon className=" w-10 h-10 rotate-180 hover:fill-slate-600 transition duration-300" />
        </button>
      </div>
    </>
  );
}

export default MainSlider;
