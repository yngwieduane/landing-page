import React, { useState } from "react";
import MainLogo from "../logo-psi-white.svg";
import MainImage from "../images/main-img1.webp";
import ContactForm from "./tools/ContactForm";
import LanguageSwitcher from "./LanguageSwitcher";

import { useTranslation } from "react-i18next";

const HeaderSlider = (props) => {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const saveFormDataHandler = (formData) => {
    console.log(formData);
  };

  return (
    <div
      className="bg-white background-image relative"
      style={{ backgroundImage: `url(${MainImage})` }}
    >
      <header className="container mx-auto absolute inset-x-0 top-0 z-40">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Property Shop Investment</span>
              <img className="h-12 w-auto" src={MainLogo} alt="" />
            </a>
          </div>
          <div className="flex lg:flex lg:flex-1 lg:justify-end">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="container mx-auto py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-start col-span-2">
              <h1 className="text-5xl font-light tracking-tight text-white mb-2">
                {t("reem_hills_main")}
              </h1>
              <h2 className="text-6xl font-bold tracking-tight text-white sm:text-6xl">
                {t("reem_hills_main2")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                {t("reem_hills_desc")}
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                {t("reem_hills_desc2")}
              </p>
              <div className="mt-10 flex items-start justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("get_started")}
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <ContactForm formMainCSS="backdrop-blur-sm p-5 text-start text-white" formMainTitle={t("let_us_know")} formMainButton={t("send")} onSaveFormData={saveFormDataHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
