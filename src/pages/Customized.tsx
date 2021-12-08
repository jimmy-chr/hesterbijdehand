import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Customized = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("customized.title")}</h2>
        <p>Sub</p>
      </main>

      <nav>
        <Link to="/">{t("home.title")}</Link>
      </nav>
    </>
  );
};

export default Customized;
