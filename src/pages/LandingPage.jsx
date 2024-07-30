import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import HeaderSlider from "../components/HeaderSlider";
import YoutubeEmbed from "../components/tools/YoutubeEmbed";
import GalleryImages from "../components/tools/GalleryImages";
import Tabs from "../components/Tabs";
import Amenities from "../components/tools/Amenities";
import Nearby from "../components/tools/Nearby";
import Gallery1 from "../images/gallery-1-new.webp";
import GalleryThumb1 from "../images/gallery-1-thumb-new.webp";
import Gallery2 from "../images/gallery-2-new.webp";
import GalleryThumb2 from "../images/gallery-2-thumb-new.webp";
import Gallery3 from "../images/gallery-3-new.webp";
import GalleryThumb3 from "../images/gallery-3-thumb-new.webp";
import Gallery4 from "../images/gallery-4-new.webp";
import GalleryThumb4 from "../images/gallery-4-thumb-new.webp";
import Gallery5 from "../images/gallery-5-new.webp";
import GalleryThumb5 from "../images/gallery-5-thumb-new.webp";
import Gallery6 from "../images/gallery-6-new.webp";
import GalleryThumb6 from "../images/gallery-6-thumb-new.webp";

import FpB11 from "../images/landing-page/reem-hills-al-reem-island/floorplan/1-br-1.webp";
import FpB12 from "../images/landing-page/reem-hills-al-reem-island/floorplan/1-br-2.webp";
import FpB13 from "../images/landing-page/reem-hills-al-reem-island/floorplan/1-br-3.webp";
import FpB14 from "../images/landing-page/reem-hills-al-reem-island/floorplan/1-br-4.webp";
import FpB21 from "../images/landing-page/reem-hills-al-reem-island/floorplan/2-br-1.webp";
import FpB22 from "../images/landing-page/reem-hills-al-reem-island/floorplan/2-br-2.webp";
import FpB23 from "../images/landing-page/reem-hills-al-reem-island/floorplan/2-br-3.webp";
import FpB24 from "../images/landing-page/reem-hills-al-reem-island/floorplan/2-br-4.webp";
import FpB31 from "../images/landing-page/reem-hills-al-reem-island/floorplan/3-br-1.webp";
import FpB32 from "../images/landing-page/reem-hills-al-reem-island/floorplan/3-br-2.webp";
import FpB33 from "../images/landing-page/reem-hills-al-reem-island/floorplan/3-br-3.webp";
import FpB34 from "../images/landing-page/reem-hills-al-reem-island/floorplan/3-br-4.webp";

import AmeIcons1 from "../images/amenities/green-space.svg";
import AmeIcons2 from "../images/amenities/sports-court.svg";
import AmeIcons3 from "../images/amenities/retail.svg";
import AmeIcons4 from "../images/amenities/play-area.svg";
import AmeIcons5 from "../images/amenities/gym.svg";
import AmeIcons6 from "../images/amenities/mosque.svg";
import AmeIcons7 from "../images/amenities/parks.svg";
import AmeIcons8 from "../images/amenities/running-track.svg";
import AmeIcons9 from "../images/amenities/beach.svg";
import AmeIcons10 from "../images/amenities/school.svg";
import AmeIcons11 from "../images/amenities/meet-lounges.svg";
import AmeIcons12 from "../images/amenities/town-center.svg";
import AmenitiesImg from "../images/amenities.webp";

import Nearby1 from '../images/nearbys/al-reem-hospital.webp';
import Nearby2 from '../images/nearbys/al-reem-mall.webp';
import Nearby3 from '../images/nearbys/sorbonne-university.webp';
import Nearby4 from '../images/nearbys/boutik-mall.webp';
import Nearby5 from '../images/nearbys/rebton-school.webp';

function LandingPage() {
  
  const { t } = useTranslation();

  const amenitiesData = [
    {
      title: t("open_green_spaces"),
      icons: AmeIcons1,
    },
    {
      title: t("sports_courts"),
      icons: AmeIcons2,
    },
    {
      title: t("retails_fb_hubs"),
      icons: AmeIcons3,
    },
    {
      title: t("kids_play_areas"),
      icons: AmeIcons4,
    },
    {
      title: t("gyms"),
      icons: AmeIcons5,
    },
    {
      title: t("mosques"),
      icons: AmeIcons6,
    },
    {
      title: t("parks"),
      icons: AmeIcons7,
    },
    {
      title: t("running_and_cycling"),
      icons: AmeIcons8,
    },
    {
      title: t("beach_access"),
      icons: AmeIcons9,
    },
    {
      title: t("schools"),
      icons: AmeIcons10,
    },
    {
      title: t("meet_greet"),
      icons: AmeIcons11,
    },
    {
      title: t("town_center"),
      icons: AmeIcons12,
    },
  ];
  const floorsData = [
    {
      title: t("1_bedroom"),
      content: "#",
      image: Gallery1,
      images: [FpB11, FpB12, FpB13, FpB14],
    },
    {
      title: t("2_bedroom"),
      content: "#",
      image: Gallery2,
      images: [FpB21, FpB22, FpB23, FpB24],
    },
    {
      title: t("3_bedroom"),
      content: "#",
      image: Gallery3,
      images: [FpB31, FpB32, FpB33, FpB34],
    },
  ];
  const nearbyData = [
    {
      title: "Al Reem Hospital",
      image: Nearby1,
    },
    {
      title: "Al Reem Mall",
      image: Nearby2,
    },
    {
      title: "Sorbonne University",
      image: Nearby3,
    },
    {
      title: "Boutik Mall",
      image: Nearby4,
    },
    {
      title: "Repton School",
      image: Nearby5,
    },
  ];
  return (
    <div className="App font-primary">
      <HeaderSlider />
      <div className="container mx-auto my-8 px-5 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-opacity-10 rounded-md border-indigo-950 hover:bg-indigo-950 text-indigo-950 hover:text-white p-3">
            <h3 className="text-2xl font-bold">1-3 BR</h3>
            <p>{t("apartments")}</p>
          </div>
          <div className="bg-white border border-opacity-10 rounded-md border-indigo-950 hover:bg-indigo-950 text-indigo-950 hover:text-white p-3">
            <h3 className="text-2xl font-bold">3 BR {t("duplex")}</h3>
            <p>{t("townhouses")}</p>
          </div>
          <div className="bg-white border border-opacity-10 rounded-md border-indigo-950 hover:bg-indigo-950 text-indigo-950 hover:text-white p-3">
            <h3 className="text-2xl font-bold py-3">{t("by_q_properties")}</h3>
          </div>
          <div className="bg-white border border-opacity-10 rounded-md border-indigo-950 hover:bg-indigo-950 text-indigo-950 hover:text-white p-3">
            <h3 className="text-2xl font-bold">1-3 BR</h3>
            <p>{t("apartments")}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-50">
          <div className="text-indigo-950 px-5">
            <h3 className="text-lg font-medium mb-3">{t("about_the_project")}</h3>
            <h2 className="text-3xl font-medium mb-6">{t("reem_hills")}</h2>
            <p className="text-lg leading-8">
            {t("description_reem_hills")}
            </p>
          </div>
          <div>
            <YoutubeEmbed embedId="-aQ7qiSf0Hs" />
          </div>
        </div>
      </div>

      <div className=" my-8 px-5">
        <h2 className="font-medium text-center text-orange-600 text-3xl my-10">
          {t("gallery")}
        </h2>
        <GalleryImages
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div class="grid grid-cols-3 gap-4">
            <div>
              <a data-fancybox="gallery" href={Gallery1}>
                <img className="w-full" src={GalleryThumb1} />
              </a>
            </div>
            <div>
              <a data-fancybox="gallery" href={Gallery2}>
                <img className="w-full" src={GalleryThumb2} />
              </a>
            </div>
            <div>
              <a data-fancybox="gallery" href={Gallery3}>
                <img className="w-full" src={GalleryThumb3} />
              </a>
            </div>
            <div>
              <a data-fancybox="gallery" href={Gallery4}>
                <img className="w-full" src={GalleryThumb4} />
              </a>
            </div>
            <div>
              <a data-fancybox="gallery" href={Gallery5}>
                <img className="w-full" src={GalleryThumb5} />
              </a>
            </div>
            <div>
              <a data-fancybox="gallery" href={Gallery6}>
                <img className="w-full" src={GalleryThumb6} />
              </a>
            </div>
          </div>
        </GalleryImages>
      </div>

      <div className=" my-8 px-5">
        <h2 className="font-medium text-center text-orange-600 text-3xl my-10">
        {t("floor_plan")}
        </h2>
        <Tabs items={floorsData} />
      </div>

      <div className=" my-8 px-5">
        <h2 className="font-medium text-center text-orange-600 text-3xl my-10">
          {t("amenities_within")}
        </h2>
        <Amenities mainimg={AmenitiesImg} items={amenitiesData} />
      </div>
      <div className="container mx-auto my-8 px-5 relative">
        <h2 className="text-indigo-950 font-bold text-3xl mt-20 ms-4">
          {t("near_by")}
        </h2>
        <Nearby items={nearbyData} />
      </div>
    </div>
  );
}

export default LandingPage;
