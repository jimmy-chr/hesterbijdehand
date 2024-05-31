import React, { useRef, useState } from "react";
import {
  Dropdown,
  Icon,
  Menu as SemanticMenu,
  Ref,
  Sidebar,
  Sticky,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import MenuItems from "./MenuItems";
import * as S from "./menu.styles";
import { Media } from "./MediaContextProvider";

enum Languages {
  Dutch = "NL",
  English = "EN",
}

const Menu = (props: { children: React.ReactNode }) => {
  const { i18n, t } = useTranslation();
  const contextRef = useRef(null);

  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  const changeLanguage = (lng?: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Ref innerRef={contextRef}>
      <Sidebar.Pushable style={{ transform: "none" }}>
        <Sticky context={contextRef}>
          <Sidebar
            as={SemanticMenu}
            animation="overlay"
            vertical
            visible={sidebarOpened}
            onHide={() => setSidebarOpened(false)}
          >
            <MenuItems setSidebarOpened={setSidebarOpened} />
          </Sidebar>
        </Sticky>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Sticky context={contextRef}>
            <S.Wrapper>
              <SemanticMenu pointing secondary>
                <S.Media at="sm">
                  <SemanticMenu.Item
                    onClick={() => setSidebarOpened(!sidebarOpened)}
                    style={{ height: "100%" }}
                  >
                    <Icon name="sidebar" />
                  </SemanticMenu.Item>
                  <SemanticMenu.Item>
                    <SemanticHeader as="h2">
                      <SemanticHeader.Content>
                        {t("header.title")}
                      </SemanticHeader.Content>
                      <SemanticHeader.Subheader>
                        {t("header.subtitle")}
                      </SemanticHeader.Subheader>
                    </SemanticHeader>
                  </SemanticMenu.Item>
                </S.Media>

                <S.Media greaterThan="sm">
                  <MenuItems />
                </S.Media>

                <SemanticMenu.Item position="right">
                  <Dropdown
                    button
                    floating
                    className="icon"
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
            </S.Wrapper>
          </Sticky>
          <Media at="sm">
            <S.MobileSegment>{props.children}</S.MobileSegment>
          </Media>
          <Media greaterThan="sm">{props.children}</Media>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Ref>
  );
};

export default Menu;
