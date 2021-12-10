import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Segment } from "semantic-ui-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header as="h2">{t("contact.title")}</Header>
        </Grid.Column>
      </Grid.Row>
      <Segment basic>
        <p>{t("contact.description")}</p>
      </Segment>
    </Grid>
  );
};

export default Contact;
