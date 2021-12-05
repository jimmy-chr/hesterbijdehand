import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Image, Header, Divider } from "semantic-ui-react";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src="https://cataas.com/cat" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h2">{t("home.header-title")}</Header>
            {t("home.header-description")}
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={16}>
            <ImageCarousel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
