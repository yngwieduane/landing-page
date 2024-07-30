import React, { useState } from "react";
import SwiperSlider from "./tools/SwiperSlider";
import Modals from "./tools/Modals";
import { useTranslation } from "react-i18next";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const NavbarContent = (props) => {
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
      <div className="grid grid-cols-2 gap-4 bg-gray-50">
        <div
          className="h-100 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url("${props.data[props.visibleTab].image}")`,
          }}
        ></div>
        <div className="">
          <SwiperSlider
            slidePerView="1"
            slides={props.data[props.visibleTab].images}
          />
          <div className="my-10 flex items-center justify-center gap-x-6">
            <button
              onClick={modalHandler}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {t("ask_for_price")}
            </button>
            <button
              onClick={modalHandler}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {t("download_floor_plan")}{" "}
              <ArrowDownTrayIcon className="flex w-5 inline-flex" />
            </button>
            <Modals modalState={setModal} onModalUpdate={modalUpdate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContent;
