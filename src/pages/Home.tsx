import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Image, Header, Divider } from "semantic-ui-react";
import ImageCarousel from "../components/ImageCarousel";
import Page from "../components/Page";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{t("home.title")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src="https://cataas.com/cat" size="medium" rounded />
          </Grid.Column>
          <Grid.Column width={12}>{t("home.header-description")}</Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={16}>
            <ImageCarousel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
};

export default Home;
