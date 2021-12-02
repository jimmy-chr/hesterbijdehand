import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./i18n";

const App = () => {
  return (
    <BrowserRouter>
      <Segment>
        <Container>Hesterbijdehand</Container>
      </Segment>
      <Segment>
        <Container>
          <Menu />
        </Container>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producten" element={<Products />} />
            <Route path="/over-mij" element={<About />} />
          </Routes>
        </Container>
      </Segment>
    </BrowserRouter>
  );
};

export default App;
