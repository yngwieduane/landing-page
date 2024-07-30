import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
register();

function SwiperSliderMain(props) {
  const swiperElRef3 = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef3.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef3.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });

    const swiperContainer1 = swiperElRef3.current;
    const params1 = {
      navigation: {
        nextEl: ".review-swiper-button-next-main",
        prevEl: ".review-swiper-button-prev-main",
      },
    };

    Object.assign(swiperContainer1, params1);
    swiperContainer1.initialize();
  }, []);

  return (
    <div className="relative">
      <div className="absolute start-0 end-0 top-1/2 flex justify-between px-5">
        <div className="review-swiper-button-prev-main z-10 w-12 h-12 left-0 relative text-white text-start">
          <ChevronLeftIcon className="w-12 h-12 rounded-full bg-blue-950 opacity-80 p-3" /></div>
        <div className="review-swiper-button-next-main z-10 w-12 h-12 right-0 relative text-white text-right">
          <ChevronRightIcon className="w-12 h-12 rounded-full bg-blue-950 opacity-80 p-3" /></div>
      </div>
      <swiper-container
        ref={swiperElRef3}
        space-between="30"
        slides-per-view={props.slidePerView}
        navigation={props.navigation}
        pagination={props.pagination}
        init="false"
      >
        {props.slides.map((project,index) => (
          <swiper-slide
            key={index}
            class="bg-no-repeat bg-cover bg-center relative w-8 rounded-lg"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="bg-gradient-to-t from-blue-950 h-96 rounded-lg">
              <div className="absolute bottom-0 px-5">
                <h2 className="flex items-center gap-2 text-3xl font-thin text-white mb-4 justify-center md:justify-start">
                  {project.title}
                </h2>
                <h3 className="flex items-center gap-2 text-l font-thin text-white mb-4 justify-center md:justify-start">
                  {project.type}
                </h3>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default SwiperSliderMain;
