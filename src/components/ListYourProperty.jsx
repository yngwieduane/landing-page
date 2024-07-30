import React from "react";
import ListYourPropertyBG from "../images/banners/list-your-property-main-homepage.jpg";
import PSILogo from "../images/psi-logo.png";
import BayutLogo from "../images/bayut-logo.png";
import DubizLogo from "../images/dubizzle.png";
import PfLogo from "../images/property-finder.png";
import { PlayIcon } from "@heroicons/react/20/solid";
import ContactForm from "./tools/ContactForm";

const ListYourProperty = () => {
  return (
    <>
      <div
        className="relative grid grid-cols-1 content-end bg-no-repeat bg-cover bg-center h-96 p-5 rounded-lg"
        style={{ backgroundImage: `url(${ListYourPropertyBG})` }}
      >
        <div className="flex gap-4">
          <button className="">
            <PlayIcon className="bg-indigo-900 text-white rounded-full p-4 w-12" />
          </button>
          <button className="bg-white rounded-full px-5 ">Watch Video</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 relative">
        <div className="col-span-2">
            <h2 className="text-3xl font-bold mt-10 mb-3">BE with the Brand you Trust</h2>
            <div className="border-b w-32 border-2 border-black my-10"></div>
            <p className="text-2xl text-gray-400">Where will we list your property ?</p>
            <div className="flex  my-10">
            <img src={PSILogo} className="w-14 me-5" />
            <img src={BayutLogo} className="w-auto me-5"/>
            <img src={DubizLogo} className="w-auto me-5"/>
            <img src={PfLogo} className="w-auto me-5"/>
            </div>
        </div>
        <div className="mt-5 md:-mt-80 pe-10">
          <ContactForm
            formMainCSS="backdrop-blur-sm p-5 text-start bg-white rounded-lg drop-shadow"
            formMainTitle="List Your Property"
            formMainButton="Register Now"
          />
        </div>
      </div>
    </>
  );
};

export default ListYourProperty;
