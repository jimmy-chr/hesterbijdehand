import React, { useState } from "react";
import { Menu as SemanticMenu, MenuItemProps } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

enum MenuItems {
  Home = "home",
  Products = "products",
  About = "about",
}

const Menu = () => {
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
          Home
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.Products}
          active={selectedMenuItem === MenuItems.Products}
          onClick={onMenuClick}
          as={NavLink}
          to="/producten"
        >
          Producten
        </SemanticMenu.Item>

        <SemanticMenu.Item
          name={MenuItems.About}
          active={selectedMenuItem === MenuItems.About}
          onClick={onMenuClick}
          as={NavLink}
          to="/over-mij"
        >
          Over mij
        </SemanticMenu.Item>
      </SemanticMenu>
    </>
  );
};

export default Menu;
