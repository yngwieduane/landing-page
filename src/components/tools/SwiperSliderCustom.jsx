import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import {
  MapPinIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
register();

const SwiperSlider = (props) => {
  const swiperElRef2 = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef2.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef2.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });

    const swiperContainer = swiperElRef2.current;
    const params = {
      navigation: {
        nextEl: ".review-swiper-button-next1",
        prevEl: ".review-swiper-button-prev1",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
      },
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div className="relative">
      <div className="absolute end-0 bottom-0 grid grid-cols-3">
        <div className="swiper-pagination relative z-10 bg-white py-3 px-4">
          <span className="swiper-pagination-current"></span>
          <span className="swiper-pagination-total"></span>
        </div>
        <div className="review-swiper-button-prev1 z-10 p-2 right-0 relative text-white bg-orange-600 hover:bg-orange-500">
          <ChevronLeftIcon className="w-10 h-10" />
        </div>
        <div className="review-swiper-button-next1 z-10 p-2 right-0 relative text-white bg-orange-600  hover:bg-orange-500">
          <ChevronRightIcon className="w-10 h-10" />
        </div>
      </div>
      <swiper-container ref={swiperElRef2} init="false" class="h-[45rem]">
        {props.slides.map((slide,index) => (
          <swiper-slide
            key={index}
            class="bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-gradient-to-r from-blue-950 from-10% to-transparent to-70% h-full">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 h-full items-center text-center md:text-start">
                <div className="px-4 md:px-auto">
                  <img className="w-auto mb-5 mx-auto md:mx-0" src={slide.developer_img} />
                  <h2 className="flex items-center gap-2 text-3xl font-thin text-white mb-4 justify-center md:justify-start">
                    <MapPinIcon className="bg-red-600 h-10 w-10 text-white p-2 rounded-full " />
                    {slide.location}
                  </h2>
                  <h1 className="text-white text-4xl md:text-5xl font-medium">
                    {slide.title}
                  </h1>
                  <p className="text-white text-xl my-8 md:text-2xl">
                    {slide.description}
                  </p>
                  <button className="rounded-md bg-orange-600 px-5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Sign Up
                  </button>
                  <Link
                    to="#"
                    className="px-5 py-2.5 text-white text-2xl font-semibold hover:text-gray-400"
                  >
                    Learn More <ChevronRightIcon className="w-7 inline-flex"/>
                  </Link>
                </div>
                <div className=""></div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default SwiperSlider;
