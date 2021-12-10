import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Image } from "semantic-ui-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header as="h2">{t("about-me.title")}</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column width={4}>
        <Image src="https://cataas.com/cat" />
      </Grid.Column>
      <Grid.Column width={12}>{t("about-me.description-1")}</Grid.Column>
      <Grid.Column width={13}>{t("about-me.description-2")}</Grid.Column>
      <Grid.Column width={3}>
        <Image src="https://cataas.com/cat" />
      </Grid.Column>
    </Grid>
  );
};

export default About;
