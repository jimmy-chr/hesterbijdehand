import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("contact.title")}</h2>
        <p>Sub</p>
      </main>

      <nav>
        <Link to="/">{t("home.title")}</Link>
      </nav>
    </>
  );
};

export default Contact;
