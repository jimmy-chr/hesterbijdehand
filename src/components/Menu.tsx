import React, { useState } from "react";
import {
  Dropdown,
  Icon,
  Menu as SemanticMenu,
  MenuItemProps,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

enum MenuItems {
  Home = "home",
  About = "about",
  Collection = "collection",
  Workshop = "workshop",
  Customization = "customization",
  Contact = "contact",
}

enum Languages {
  Dutch = "Nederlands",
  English = "English",
}

// TODO
/*
const languages = [
  {
      id: 'nl',
      title: 'Dutch',
      flag: 'nl'
  },
  {
      id: 'en',
      title: 'English',
      flag: 'us'
  }
];
*/

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
          <Icon name="home" />
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

        <SemanticMenu.Item
          name={MenuItems.Collection}
          active={selectedMenuItem === MenuItems.Collection}
          onClick={onMenuClick}
          as={NavLink}
          to="/collectie"
        >
          {t("collection.title")}
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.Workshop}
          active={selectedMenuItem === MenuItems.Workshop}
          onClick={onMenuClick}
          as={NavLink}
          to="/atelier"
        >
          {t("workshop.title")}
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.Customization}
          active={selectedMenuItem === MenuItems.Customization}
          onClick={onMenuClick}
          as={NavLink}
          to="/maatwerk"
        >
          {t("customization.title")}
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.Contact}
          active={selectedMenuItem === MenuItems.Contact}
          onClick={onMenuClick}
          as={NavLink}
          to="/contact"
        >
          {t("contact.title")}
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
