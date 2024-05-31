import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Icon, Menu as SemanticMenu, MenuItemProps } from "semantic-ui-react";

enum MenuItem {
  Home = "home",
  Collection = "collection",
  Story = "story",
  Maintenance = "maintenance",
  Contact = "contact",
}

const MenuItems = ({
  setSidebarOpened,
}: {
  setSidebarOpened?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>();
  const { t } = useTranslation();

  const onMenuClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    setSelectedMenuItem(data.name);
    setSidebarOpened && setSidebarOpened(false);
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
        name={MenuItem.Collection}
        active={selectedMenuItem === MenuItem.Collection}
        onClick={onMenuClick}
        as={NavLink}
        to="/collectie"
      >
        {t("collection.title")}
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.Story}
        active={selectedMenuItem === MenuItem.Story}
        onClick={onMenuClick}
        as={NavLink}
        to="/verhaal"
      >
        {t("story.title")}
      </SemanticMenu.Item>

      <SemanticMenu.Item
        name={MenuItem.Maintenance}
        active={selectedMenuItem === MenuItem.Maintenance}
        onClick={onMenuClick}
        as={NavLink}
        to="/onderhoud"
      >
        {t("maintenance.title")}
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
