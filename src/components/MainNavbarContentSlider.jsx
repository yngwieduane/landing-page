import React, { useState } from "react";
import Modals from "./tools/Modals";
import SwiperSliderMain from "./tools/SwiperSliderMain";
import { useTranslation } from "react-i18next";

const MainNavbarContentSlider = (props) => {
  const { t } = useTranslation();
  const [setModal, setSetModal] = useState(false);

  const modalHandler = (event) => {
    console.log("clicked = " + setModal);
    setSetModal(true);
  };

  const modalUpdate = (event) => {
    console.log(event);
    setSetModal(event);
  };

  return (
    <div className="container mx-auto my-8 px-5">
      <SwiperSliderMain
            slidePerView="4"
            pagination="false"
            navigation="true"
            slides={props.data[props.visibleTab].projects}
          />
    </div>
  );
};

export default MainNavbarContentSlider;
