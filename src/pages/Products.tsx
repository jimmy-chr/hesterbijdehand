import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <main>
        <h2>{t("products.title")}</h2>
        <p>Sub</p>
      </main>
      <nav>
        <Link to="/">{t("home.title")}</Link>
      </nav>
    </>
  );
};

export default Products;
