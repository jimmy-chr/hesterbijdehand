import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Image } from "semantic-ui-react";
import Page from "../components/Page";

const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{t("maintenance.title")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <p>{t("maintenance.description")}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src="https://cataas.com/cat" size="large" centered rounded />
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src="https://cataas.com/cat" size="large" centered rounded />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src="https://cataas.com/cat" size="large" centered rounded />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
};

export default Maintenance;
