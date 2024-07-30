import React from 'react';
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import FooterLp from "../components/tools/FooterLp";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translations.json";
import translationAR from "../locales/ar/translations.json";
import translationES from "../locales/es/translations.json";
import translationFR from "../locales/fr/translations.json";
import translationGE from "../locales/ge/translations.json";
import translationIT from "../locales/it/translations.json";
import translationRU from "../locales/ru/translations.json";
import translationTR from "../locales/tr/translations.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  ge: {
    translation: translationGE,
  },
  it: {
    translation: translationIT,
  },
  ru: {
    translation: translationRU,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <FooterLp/>
    </>
  );
}

export default RootLayout;
