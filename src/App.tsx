import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";
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

      <Segment
        inverted
        vertical
        style={{ padding: "3em 0em", marginTop: "1em" }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Info" />
                <List link inverted>
                  <Link to="/over-mij">
                    <List.Item>Over mij</List.Item>
                  </Link>
                  <List.Item as="a">Contact</List.Item>
                  <List.Item as="a">Atelier</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Diensten" />
                <List link inverted>
                  <List.Item as="a">Aimant</List.Item>
                  <List.Item as="a">Maatwerk</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Dolor sit amet consectetur adipiscing. Venenatis lectus magna
                  fringilla urna porttitor rhoncus dolor. Amet massa vitae
                  tortor condimentum lacinia quis.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </BrowserRouter>
  );
};

export default App;
