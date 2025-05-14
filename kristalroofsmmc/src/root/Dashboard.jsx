/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import { useLoaderData, useRoutes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import Gallery from "../pages/Gallery";
import Discounts from "../pages/Discounts";
import Design from "../pages/Design";
import ContactUs from "../pages/ContactUs";
import Calculator from "../pages/Calculator";
import Accesories from "../pages/Accesories";
import AboutUs from "../pages/AboutUs";

const Dashboard = () => {
  const data = useLoaderData(); // Use useLoaderData to fetch loader data

  // Define route configuration
  const routes = [
    { path: "/", element: <Home /> },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:id",
      element: <ProductDetail />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/discounts",
      element: <Discounts />,
    },
    {
      path: "/design",
      element: <Design />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/accesories",
      element: <Accesories />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    { path: "*", element: <NotFound /> },
  ];

  // Use useRoutes to render routes
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default Dashboard;

// This component uses React Router to define the main routes of the application.
// The <Routes> component contains multiple <Route> components, each defining a path and the corresponding component to render.
