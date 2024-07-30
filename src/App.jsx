import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Units from "./pages/Units";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import "./App.css";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //errorElement: <ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/units", element: <Units /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:country", element: <Projects /> },
      { path: "/projects/:country/:city/:community/:subcommunity/:projectname", element: <Projects /> },
      { path: "/landing-page", element: <LandingPage /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}><I18nextProvider i18n={i18next}><RouterProvider router={router} /></I18nextProvider></QueryClientProvider>;
}

export default App;
