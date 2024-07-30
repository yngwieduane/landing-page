import React, { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
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
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view={props.slidePerView}
      navigation="true"
      pagination="true"
    >
    {props.slides.map((img) => (
        <swiper-slide><img className="w-50" src={img} /></swiper-slide>
    ))}
    </swiper-container>
  );
};

export default SwiperSlider;
