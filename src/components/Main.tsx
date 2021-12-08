import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import About from "../pages/About";
import Collection from "../pages/Collection";
import Contact from "../pages/Contact";
import Customized from "../pages/Customized";
import Home from "../pages/Home";
import Workshop from "../pages/Workshop";
import Menu from "./Menu";

const Main = () => {
  return (
    <Container>
      <Segment>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-mij" element={<About />} />
          <Route path="/collectie" element={<Collection />} />
          <Route path="/atelier" element={<Workshop />} />
          <Route path="/maatwerk" element={<Customized />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Segment>
    </Container>
  );
};

export default Main;
