import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Segment inverted vertical style={{ padding: "3em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content={t("footer.info")} />
              <List inverted>
                <List.Item>
                  <NavLink to="/over-mij">{t("about-me.title")}</NavLink>
                </List.Item>
                <List.Item>
                  <NavLink to="/contact">{t("contact.title")}</NavLink>
                </List.Item>
                <List.Item>
                  <NavLink to="/atelier">{t("workshop.title")}</NavLink>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content={t("footer.services")} />
              <List link inverted>
                <List.Item>
                  <NavLink to="/collectie/aimant">Aimant</NavLink>
                </List.Item>
                <List.Item>
                  <NavLink to="/maatwerk">{t("customization.title")}</NavLink>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                {t("footer.title")}
              </Header>
              <p>{t("footer.description")}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
