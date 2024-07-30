import React, { useState, useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "./SwiperSliderCustom.css";
register();

const SwiperSlider = (props) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });

    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: {
        nextEl: ".review-swiper-button-next",
        prevEl: ".review-swiper-button-prev",
      },
      pagination: true,
      //slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: props.slidePerView,
        },
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <>
    <div className="absolute end-0 top-0 grid grid-cols-2 gap-4">
      <div className="review-swiper-button-prev z-10 w-12 h-12 right-0 relative"></div>
      <div className="review-swiper-button-next z-10 w-12 h-12 right-0 relative "></div>
    </div>
      <swiper-container ref={swiperElRef} pagination="false" init="false">
        {props.slides.map((img, index) => (
          <swiper-slide class="p-5">
            <img className="w-50" src={img.image} />
            <div className="absolute bottom-0 right-0 z-10 bg-white w-4/5">
              <p className="flex items-center py-5 ps-5">
                <span className="text-5xl font-medium text-gray-400 me-5">
                  {index + 1}
                </span>
                <span className="text-xl font-bold text-indigo-950">
                  {img.title}
                </span>
              </p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default SwiperSlider;
