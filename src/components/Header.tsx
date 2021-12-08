import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Header as SemanticHeader,
  Icon,
  Segment,
} from "semantic-ui-react";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Segment>
      <Container>
        <SemanticHeader as="h1">
          <Icon name="briefcase" />
          <SemanticHeader.Content>{t("header.title")}</SemanticHeader.Content>
          <SemanticHeader.Subheader>
            {t("header.subtitle")}
          </SemanticHeader.Subheader>
        </SemanticHeader>
      </Container>
    </Segment>
  );
};

export default Header;
