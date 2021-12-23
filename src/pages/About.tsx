import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import Page from "../components/Page";

const About = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{t("about-me.title")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Segment basic>
          <Image src="https://cataas.com/cat" size="small" floated="left" />
          <p>{t("about-me.description-1")}</p>
          <Image src="https://cataas.com/cat" size="medium" floated="right" />
          <p>{t("about-me.description-2")}</p>
        </Segment>
      </Grid>
    </Page>
  );
};

export default About;
