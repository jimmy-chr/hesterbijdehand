import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Customized from "../pages/Customized";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Workshop from "../pages/Workshop";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/over-mij" element={<About />} />
      <Route path="/collectie" element={<Collection />} />
      <Route path="/atelier" element={<Workshop />} />
      <Route path="/maatwerk" element={<Customized />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collectie/:id" element={<Product />} />
    </Routes>
  );
};

export default Main;
