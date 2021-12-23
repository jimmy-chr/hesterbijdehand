import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Icon, Menu as SemanticMenu, MenuItemProps } from "semantic-ui-react";

enum MenuItem {
  Home = "home",
  About = "about",
  Collection = "collection",
  Workshop = "workshop",
  Customization = "customization",
  Contact = "contact",
}

const MenuItems = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
  const { t } = useTranslation();

  const onMenuClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    setSelectedMenuItem(data.name);
  };

  return (
    <>
      <SemanticMenu.Item
        name={MenuItem.Home}
        active={selectedMenuItem === MenuItem.Home}
        onClick={onMenuClick}
        as={NavLink}
        to="/"
      >
        <Icon name="home" style={{ float: "none" }} />
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.About}
        active={selectedMenuItem === MenuItem.About}
        onClick={onMenuClick}
        as={NavLink}
        to="/over-mij"
      >
        {t("about-me.title")}
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.Collection}
        active={selectedMenuItem === MenuItem.Collection}
        onClick={onMenuClick}
        as={NavLink}
        to="/collectie"
      >
        {t("collection.title")}
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.Workshop}
        active={selectedMenuItem === MenuItem.Workshop}
        onClick={onMenuClick}
        as={NavLink}
        to="/atelier"
      >
        {t("workshop.title")}
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.Customization}
        active={selectedMenuItem === MenuItem.Customization}
        onClick={onMenuClick}
        as={NavLink}
        to="/maatwerk"
      >
        {t("customization.title")}
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.Contact}
        active={selectedMenuItem === MenuItem.Contact}
        onClick={onMenuClick}
        as={NavLink}
        to="/contact"
      >
        {t("contact.title")}
      </SemanticMenu.Item>
    </>
  );
};

export default MenuItems;
