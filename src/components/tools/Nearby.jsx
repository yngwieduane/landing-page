import React from "react";

import SwiperSlider2 from "./SwiperSlider2";

const Nearby = (props) => {
  return <SwiperSlider2 
  slidePerView="3"
  slides={props.items}/>;
};

export default Nearby;