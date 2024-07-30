import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from 'react-slugify';
import { useTranslation } from "react-i18next";
import ContactForm from "./tools/ContactForm";
import { HomeIcon } from '@heroicons/react/20/solid';
import GalleryImages from "../components/tools/GalleryImages";
import MainNavbar from "../components/MainNavbar";
import MainNavContentEmpty from "./MainNavContentEmtpy";

const PropertyFullPage = (props) => {

    const [visibleTab, setVisibleTab] = useState(0);
    const [visibleTab1, setVisibleTab1] = useState(0);
    const { t } = useTranslation();
    const propType = props.data["propertyType"] ? (<p className="text-sm">Types<br />{props.data["propertyType"]}</p>) : ("");
    const propBed = props.data["availableBedrooms"] ? (<p className="text-sm">Beds<br />{props.data["availableBedrooms"]}</p>) : ("");
    const propHO = props.data["handoverDate"] ? (<p className="text-sm">Handover<br />{props.data["handoverDate"]}</p>) : ("");
    const propSize = props.data["builtupArea_SQFT"] ? (<p className="text-sm">Size<br />{props.data["builtupArea_SQFT"]}</p>) : ("");
    const imgFeatured = props.data["featuredImages"] ? props.data["featuredImages"][0]['imageURL'] : ("");
    const generalImages = props.data["generalImages"] ? props.data["generalImages"] : ("");
    const facilitiesAndAmenitiesImages = props.data["facilitiesAndAmenitiesImages"] ? props.data["facilitiesAndAmenitiesImages"] : ("");
    const communityImages = props.data["communityImages"] ? props.data["communityImages"] : ("");
    const unitModels = props.data["unitModels"] ? props.data["unitModels"] : ("");
    const url = '/projects/' + slugify(props.data['country']) + "/" + slugify(props.data['city']) + "/" + slugify(props.data['community']) + "/" + slugify(props.data['subCommunity']) + "/" + slugify(props.data['propertyName']);
    const breadcrumbPages = [
        { name: 'Projects', href: '/projects/', current: false },
        { name: props.data['country'], href: '/projects/' + slugify(props.data['country']), current: true },
        { name: props.data['city'], href: '/projects/' + slugify(props.data['country']) + "/" + slugify(props.data['city']), current: true },
        { name: props.data['community'], href: '/projects/' + slugify(props.data['country']) + "/" + slugify(props.data['city']) + "/" + slugify(props.data['community']), current: true },
        { name: props.data['subCommunity'], href: '/projects/' + slugify(props.data['country']) + "/" + slugify(props.data['city']) + "/" + slugify(props.data['community']) + "/" + slugify(props.data['subCommunity']), current: true },
        { name: props.data['propertyName'], href: '#', current: true },
    ];

    const galleryData = [
        {
            title: "General Images",
            image: generalImages,
        },
        {
            title: "Facilities and Amenities",
            image: facilitiesAndAmenitiesImages,
        },
        {
            title: "Community Images",
            image: communityImages,
        }
    ];
    let fpGroup;
    if (unitModels) {
        fpGroup = Object.entries(
            unitModels.reduce((acc, value) => {
                if (value.unitType == 'Office') {
                    if (!acc[value.unitType]) {
                        acc[value.unitType] = [];
                    }
                    acc[value.unitType].push(value);
                } else if (value.unitType == 'Retail') {
                    if (!acc[value.unitType]) {
                        acc[value.unitType] = [];
                    }
                    acc[value.unitType].push(value);
                } else if (value.bedrooms === '0') {
                    if (!acc['Studio']) {
                        acc['Studio'] = [];
                    }
                    acc['Studio'].push(value);
                } else {
                    if (!acc[value.bedrooms]) {
                        acc[value.bedrooms] = [];
                    }
                    acc[value.bedrooms].push(value);
                }

                return acc;
            }, {})
        ).map(([title, options]) => ({ title, options }));
    }
    return (
        <>
            <div
                className="bg-white background-image relative"
                style={{ backgroundImage: `url(${imgFeatured})` }}
            >
                <div className="relative isolate px-6 py-14 lg:px-8">
                    <div className="container mx-auto py-32">
                        <div className="text-center col-span-2">
                            <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-md">
                                {t(props.data["propertyName"])}
                            </h1>
                            <p className="mt-2 text-lg leading-8 text-white drop-shadow-md">
                                in {t(props.data["community"])}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 ">
                                <div className="text-xl font-bold tracking-tight text-white drop-shadow-md">{t(props.data["marketing1stUSP"])}</div>
                                <div className="text-xl font-bold tracking-tight text-white drop-shadow-md">{t(props.data["marketing1stUSP"])}</div>
                                <div className="text-xl font-bold tracking-tight text-white drop-shadow-md">{t(props.data["marketing1stUSP"])}</div>
                                <div className="text-xl font-bold tracking-tight text-white drop-shadow-md">{t(props.data["marketing1stUSP"])}</div>
                            </div>
                            <p className="mt-6 text-lg leading-8 text-white drop-shadow-md">
                                by<br />{t(props.data["masterDeveloper"])}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 items-center">
                <div className="text-3xl">{t(props.data["propertyName"])}</div>
                <div className="grid grid-cols-4 gap-4 items-center text-center">
                    <a className="py-2 md:py-4 border-l-2">{t('Overview')}</a>
                    <a className="py-2 md:py-4 border-l-2">{t('Gallery')}</a>
                    <a className="py-2 md:py-4 border-l-2">{t('Floor Plan')}</a>
                    <a className="py-2 md:py-4 border-l-2">{t('Location')}</a>
                </div>
            </div>
            <nav className="flex bg-gray-100" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4 px-4 py-2">
                    <li>
                        <div>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                <span className="sr-only">Home</span>
                            </a>
                        </div>
                    </li>
                    {breadcrumbPages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <svg
                                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                                <a
                                    href={page.href}
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={page.current ? 'page' : undefined}
                                >
                                    {page.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("photo gallery")}
                </h2>
                <MainNavbar
                    data={galleryData}
                    visibleTab={visibleTab}
                    setVisibleTab={setVisibleTab}
                />
                <MainNavContentEmpty data={galleryData} visibleTab={visibleTab} >
                    {galleryData[visibleTab].image.length !== 0
                        ? <GalleryImages
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <div class="grid grid-cols-4 gap-4">
                                {galleryData[visibleTab].image.map((page, index) => (
                                    <div key={index}>
                                        <a data-fancybox="gallery" href={page.imageURL}>
                                            <img className="w-full" src={page.imageURL} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </GalleryImages>
                        : "null"
                    }
                </MainNavContentEmpty>
            </div>
            {unitModels.length !== 0 ? (<div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("floor plans")}
                </h2>
                <MainNavbar
                    data={fpGroup}
                    visibleTab={visibleTab1}
                    setVisibleTab={setVisibleTab1}
                />
                <MainNavContentEmpty data={fpGroup} visibleTab={visibleTab1} >
                    {fpGroup[visibleTab1].options.length !== 0
                        ? <GalleryImages
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Floor Plan
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Model Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Sizes
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Unit Type
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Bathrooms
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Laundry Room
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Maids Room
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Parking
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {fpGroup[visibleTab1].options.map((page, index) => (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                <img src={page.floorPlanlImage} className="object-cover object-center h-24 w-24" />
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{page.modelName}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{page.area}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{(page.unitType && page.unitType !== 'UnitType') ? page.unitType : "-"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{(page.bathrooms && page.bathrooms !== '0') ? page.bathrooms : "-"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{(page.laundryRoomNo && page.laundryRoomNo !== '0') ? page.laundryRoomNo : "-"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{(page.maidsRoomNo && page.maidsRoomNo !== '0') ? page.maidsRoomNo : "-"}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{(page.parkingNo && page.parkingNo !== '0') ? page.parkingNo : "-"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </GalleryImages>
                        : "null"
                    }
                </MainNavContentEmpty>
            </div>) : ("")}
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("property details")}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("location map")}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("master plan")}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("payment plan")}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("location plan")}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t("facilities in")} {t(props.data["propertyName"])}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("facts")}
                </h2>
            </div>
            <div className="container mx-auto my-8 px-5">
                <h2 className="font-medium text-center text-3xl my-10">
                    {t(props.data["propertyName"])} {t("overview")}
                </h2>
            </div>
        </>
    );
};

export default PropertyFullPage;
