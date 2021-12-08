import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Segment inverted vertical style={{ padding: "3em 0em", marginTop: "1em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content={t("footer.info")} />
              <List inverted>
                <List.Item>
                  <Link to="/over-mij">{t("about-me.title")}</Link>
                </List.Item>
                <List.Item>
                  <Link to="/contact">{t("contact.title")}</Link>
                </List.Item>
                <List.Item>
                  <Link to="/atelier">{t("workshop.title")}</Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content={t("footer.services")} />
              <List link inverted>
                <List.Item>
                  <Link to="/collectie">Aimant</Link>
                </List.Item>
                <List.Item>
                  <Link to="/maatwerk">{t("customization.title")}</Link>
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
