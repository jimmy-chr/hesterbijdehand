import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Image } from "semantic-ui-react";
import Menu from "../components/Menu";

const Customized = () => {
  const { t } = useTranslation();

  return (
    <>
      <Menu />
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{t("customization.title")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <p>{t("customization.description")}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src="https://cataas.com/cat" size="large" centered />
          </Grid.Column>
          <Grid.Column width={6}>
            <Image src="https://cataas.com/cat" size="large" centered />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src="https://cataas.com/cat" size="large" centered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Customized;
