import React, { useState } from "react";
import {
  Dropdown,
  Icon,
  Menu as SemanticMenu,
  Sidebar,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import MenuItems from "./MenuItems";
import * as S from "./menu.styles";

enum Languages {
  Dutch = "Nederlands",
  English = "English",
}

const Menu = (props: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  const changeLanguage = (lng?: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Sidebar.Pushable>
        <Sidebar
          as={SemanticMenu}
          animation="overlay"
          vertical
          visible={sidebarOpened}
        >
          <MenuItems />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <SemanticMenu pointing secondary>
            <S.Media at="sm">
              <SemanticMenu.Item
                onClick={() => setSidebarOpened(!sidebarOpened)}
                style={{ height: "100%" }}
              >
                <Icon name="sidebar" />
              </SemanticMenu.Item>
            </S.Media>

            <S.Media greaterThan="sm">
              <MenuItems />
            </S.Media>

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
                defaultValue={i18n.language === "en" ? "en" : "nl"}
                onChange={(event, data) =>
                  changeLanguage(data.value?.toString())
                }
              />
            </SemanticMenu.Item>
          </SemanticMenu>

          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Menu;
