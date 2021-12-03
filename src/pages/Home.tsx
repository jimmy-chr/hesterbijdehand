import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("home.title")}</h2>
        <p>Sub</p>
      </main>

      <nav>
        <Link to="/collectie">{t("collection.title")}</Link>
        <Link to="/over-mij">{t("about-me.title")}</Link>
      </nav>
    </>
  );
};

export default Home;
