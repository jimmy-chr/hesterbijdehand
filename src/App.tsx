import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import Menu from "./components/Menu";
import About from "./pages/About";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import "./i18n";
import { useTranslation } from "react-i18next";
import Workshop from "./pages/Workshop";
import Customized from "./pages/Customized";
import Contact from "./pages/Contact";

const App = () => {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Segment>
        <Container>
          <Header as="h1">
            <Icon name="briefcase" />
            <Header.Content>{t("header.title")}</Header.Content>
            <Header.Subheader>{t("header.subtitle")}</Header.Subheader>
          </Header>
        </Container>
      </Segment>
      <Segment>
        <Container>
          <Menu />
        </Container>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<About />} />
            <Route path="/collectie" element={<Collection />} />
            <Route path="/atelier" element={<Workshop />} />
            <Route path="/maatwerk" element={<Customized />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Segment>
    </BrowserRouter>
  );
};

export default App;
