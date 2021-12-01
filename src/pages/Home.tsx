import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <main>
        <h2>{t("home-title")}</h2>
        <p>Sub</p>
      </main>

      <Button onClick={() => changeLanguage("en")}>EN</Button>
      <Button onClick={() => changeLanguage("nl")}>NL</Button>
      <nav>
        <Link to="/producten">Producten</Link>
        <Link to="/over-mij">About</Link>
      </nav>
    </>
  );
};

export default Home;
