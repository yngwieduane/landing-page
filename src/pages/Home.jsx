import React, { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import SwiperSliderCustom from "../components/tools/SwiperSliderCustom";

import { useTranslation } from "react-i18next";
import Gallery1 from "../images/gallery-1-new.webp";
import Gallery2 from "../images/gallery-2-new.webp";
import Gallery3 from "../images/gallery-3-new.webp";
import Devlogo from "../images/banners/eagle-hills-logo.svg";
import Slider1 from "../images/banners/eagle-hills-slider.webp";
import Slider2 from "../images/banners/bloom-holding-slider.webp";
import Slider3 from "../images/banners/saadiyat-lagoons.jpg";
import Slider4 from "../images/banners/aldar-slider.webp";

import MainNavbar from "../components/MainNavbar";
import MainNavbarContentSlider from "../components/MainNavbarContentSlider";
import MainNavbarContent from "../components/MainNavbarContent";
import ListYourProperty from "../components/ListYourProperty";
import PropertyCardSlider from "../components/PropertyCardSlider";

import MortgageCalculator from "../components/tools/MortgageCalculator";

import { fetchProjects } from '../util/http.js'

function HomePage() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [visibleTab, setVisibleTab] = useState(0);
  const [visibleTab2, setVisibleTab2] = useState(0);
  const [visibleTab3, setVisibleTab3] = useState(0);

  let content;

  const mainSliderData = [
    {
      title: "Ramhan Island",
      type: "Villa",
      developer_img: Devlogo,
      location: "Ramhan",
      description:
        "An island that some may think is a fantasy, but it is one of Abu Dhabi's modern masterpieces. Choose to live luxury and serenity in our breathtaking standalone beachfront villas, 3 - 7 bedrooms, meticulously crafted in the glamorous Maldivian style.",
      project_url: "",
      image: Slider1,
    },
    {
      title: "Bloom Granada",
      type: "Villa",
      developer_img: Devlogo,
      location: "Zayed City",
      description:
        "The latest jewel in the prestigious Bloom Living project, perfectly situated in the heart of Zayed City, the bustling new downtown of Abu Dhabi.",
      project_url: "",
      image: Slider2,
    },
    {
      title: "Saadiyat Lagoons",
      type: "Villa",
      developer_img: Devlogo,
      location: "Saddiyat Island",
      description:
        "Nestled in the heart of Abu Dhabi, the Saadiyat Lagoons is an upscale residential development Providing 4-6 BR Standalone villas With zero service charge.",
      project_url: "",
      image: Slider3,
    },
    {
      title: "Gardenia Bay",
      type: "Villa",
      developer_img: Devlogo,
      location: "Yas Island",
      description:
        "Discover Gardenia: Aldar's latest masterpiece on Yas Island, Abu Dhabi. Gardenia offers a harmonious blend of luxurious apartments and elegant townhouses in a prime waterfront location that redefine your expectations of island living.",
      project_url: "",
      image: Slider4,
    },
  ];

  const citiesData = [
    {
      title: "Abu Dhabi",
      content: "#",
      image: Gallery1,
      projects: [
        {
          title: "Al Reem Island",
          type: "APT | VI | TH | PH",
          image: Gallery1,
        },
        {
          title: "Al Reem Island 2",
          type: "APT | VI | TH | PH",
          image: Gallery2,
        },
        {
          title: "Al Reem Island 3",
          type: "APT | VI | TH | PH",
          image: Gallery3,
        },
        {
          title: "Al Reem Island",
          type: "APT | VI | TH | PH",
          image: Gallery1,
        },
        {
          title: "Al Reem Island 2",
          type: "APT | VI | TH | PH",
          image: Gallery2,
        },
        {
          title: "Al Reem Island 3",
          type: "APT | VI | TH | PH",
          image: Gallery3,
        },
      ],
    },
    {
      title: "Dubai",
      content: "#",
      image: Gallery2,
      projects: [
        {
          title: "Dubai",
          type: "APT | VI | TH | PH",
          image: Gallery1,
        },
        {
          title: "Dubai 2",
          type: "APT | VI | TH | PH",
          image: Gallery2,
        },
        {
          title: "Dubai 3",
          type: "APT | VI | TH | PH",
          image: Gallery3,
        },
        {
          title: "Dubai",
          type: "APT | VI | TH | PH",
          image: Gallery1,
        },
        {
          title: "Dubai 2",
          type: "APT | VI | TH | PH",
          image: Gallery2,
        },
        {
          title: "Dubai 3",
          type: "APT | VI | TH | PH",
          image: Gallery3,
        },
      ],
    },
    {
      title: "Sharjah",
      content: "#",
      image: Gallery3,
      projects: [
        {
          title: "Sharjah",
          type: "APT | VI | TH | PH",
          image: Gallery1,
        },
        {
          title: "Sharjah 2",
          type: "APT | VI | TH | PH",
          image: Gallery2,
        },
        {
          title: "Sharjah 3",
          type: "APT | VI | TH | PH",
          image: Gallery3,
        },
        {
          title: "Sharjah",
          type: "APT | VI | TH | PH",
          image: Gallery1,
        },
        {
          title: "Sharjah 2",
          type: "APT | VI | TH | PH",
          image: Gallery2,
        },
        {
          title: "Sharjah 3",
          type: "APT | VI | TH | PH",
          image: Gallery3,
        },
      ],
    },
  ];

  const calculatorData = [
    {
      title: "Mortgage",
      content: "#",
      image: Gallery1,
    },
    {
      title: "Amortization",
      content: "#",
      image: Gallery1,
    },
    {
      title: "Refinancing",
      content: "#",
      image: Gallery1,
    },
    {
      title: "Rent vs Buy",
      content: "#",
      image: Gallery1,
    },
    {
      title: "House Affordability",
      content: "#",
      image: Gallery1,
    },
  ];

  const featuredProjectsData = [
    {
      title: "Granada",
      type: "AP",
      beds: "St, 1, 2, 3",
      size: "397",
      hodate: "",
      startprice: "",
      community: "Madinat Zayed",
      developer: "Bloom Holding",
      url: "#",
      image: Gallery1,
    },
    {
      title: "Gardenia Bay",
      type: "AP",
      beds: "St, 1, 2, 3",
      size: "474",
      hodate: "Jun 2027",
      startprice: "805000",
      community: "Yas Island",
      developer: "Aldar Properties",
      url: "#",
      image: Gallery1,
    },
    {
      title: "Ramhan Island",
      type: "VI",
      beds: "3, 4, 5, 6, 7",
      size: "",
      hodate: "2026",
      startprice: "6400000",
      community: "Ramhan Island",
      developer: "Eagle Hills",
      url: "#",
      image: Gallery1,
    },
    {
      title: "Saadiyat Lagoons - Wilds",
      type: "VI",
      beds: "4, 5, 6",
      size: "7809",
      hodate: "2026",
      startprice: "6200000",
      community: "Saadiyat Island",
      developer: "Aldar Properties",
      url: "#",
      image: Gallery1,
    },
    {
      title: "Haven",
      type: "VI, TH",
      beds: "3,4,5,6",
      size: "1808",
      hodate: "2027",
      startprice: "2550000",
      community: "Dubai Land",
      developer: "Aldar Properties",
      url: "#",
      image: Gallery1,
    },
  ];

  const otherLinksData = [
    {
      title: "Crypto",
      subtitle: "Buy Property with Crypto",
      content: "With connections, network, knowledge and country guides, we build and design investment journeys based on",
      subcontent: "Your needs, values, lifestyle and your goals.",
      buttonText: "Learn more about Crypto",
      image: Gallery1,
    },
    {
      title: "Youngsters Program",
      subtitle: "PSI Youngsters",
      content: "Get paid & Certified this summer by joining",
      subcontent: "PSI Internship program",
      buttonText: "Learn more about Youngster Program",
      image: Gallery1,
    },
    {
      title: "PSI International",
      subtitle: "PSI International",
      content: "50 years young, the UAE offers the best climate for wealth management, relocation and investments portfolios.",
      subcontent: "",
      buttonText: "Learn more about PSI International",
      image: Gallery1,
    },
    {
      title: "Company Profile",
      subtitle: "Why PSI ?",
      content: "Our combination of vision, expertise, specialised teams, enthusiasm and transparency entitles Property Shop Invesment to set the market standard as an influencer of Abu Dhabi’s Real Estate Market.",
      subcontent: "",
      buttonText: "Learn more about PSI",
      image: Gallery1,
    }
  ];


  if (isPending) {
    content = 'Pending';
  }

  if (isError) {
    content = 'Error' + error.code + error.info + data;
  }

  if (data) {
    //setFeaturedProjects(data);
    content = <PropertyCardSlider data={data.result} />;
  }

  return (
    <>
      <div className="relative">
        <SwiperSliderCustom slidePerView="1" slides={mainSliderData} />
      </div>
      <div className="container mx-auto my-10">
        <MainNavbar
          data={citiesData}
          visibleTab={visibleTab}
          setVisibleTab={setVisibleTab}
        />
        <MainNavbarContentSlider data={citiesData} visibleTab={visibleTab} />
      </div>
      <div className="container mx-auto my-10">
        <ListYourProperty />
      </div>
      <div className="container mx-auto my-10">
        <h2 className="text-3xl">Featured Projects</h2>
        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            {content}
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 hidden">
        <MainNavbar
          data={calculatorData}
          visibleTab={visibleTab2}
          setVisibleTab={setVisibleTab2}
        />
        <MainNavbarContent data={calculatorData} visibleTab={visibleTab2} />
      </div>
      <div className="container mx-auto my-10 hidden">
        <MainNavbar
          data={otherLinksData}
          visibleTab={visibleTab3}
          setVisibleTab={setVisibleTab3}
        />
        <MainNavbarContent data={otherLinksData} visibleTab={visibleTab3} />
      </div>
    </>
  );
}

export default HomePage;
