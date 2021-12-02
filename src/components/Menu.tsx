import React, { useState } from "react";
import {
  Dropdown,
  Menu as SemanticMenu,
  MenuItemProps,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

enum MenuItems {
  Home = "home",
  Products = "products",
  About = "about",
}

enum Languages {
  Dutch = "Nederlands",
  English = "English",
}

const Menu = () => {
  const { t, i18n } = useTranslation();

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>(
    MenuItems.Home
  );

  const onMenuClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    if (!data.name) return;

    setSelectedMenuItem(data.name);
  };

  const changeLanguage = (lng?: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <SemanticMenu pointing secondary>
        <SemanticMenu.Item
          name={MenuItems.Home}
          active={selectedMenuItem === MenuItems.Home}
          onClick={onMenuClick}
          as={NavLink}
          to="/"
        >
          {t("home.title")}
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.Products}
          active={selectedMenuItem === MenuItems.Products}
          onClick={onMenuClick}
          as={NavLink}
          to="/producten"
        >
          {t("products.title")}
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.About}
          active={selectedMenuItem === MenuItems.About}
          onClick={onMenuClick}
          as={NavLink}
          to="/over-mij"
        >
          {t("about-me.title")}
        </SemanticMenu.Item>

        <SemanticMenu.Item position="right">
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="world"
            options={[
              {
                key: "nl",
                text: Languages.Dutch,
                value: "nl",
              },
              {
                key: "en",
                text: Languages.English,
                value: "en",
              },
            ]}
            defaultValue="nl"
            onChange={(event, data) => changeLanguage(data.value?.toString())}
          />
        </SemanticMenu.Item>
      </SemanticMenu>
    </>
  );
};

export default Menu;
