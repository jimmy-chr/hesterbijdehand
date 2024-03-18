import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Story from "../pages/Story";
import Maintenance from "../pages/Maintenance";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collectie" element={<Collection />} />
      <Route path="/verhaal" element={<Story />} />
      <Route path="/onderhoud" element={<Maintenance />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collectie/:id" element={<Product />} />
    </Routes>
  );
};

export default Main;
