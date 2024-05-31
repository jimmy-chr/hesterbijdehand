import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import Page from "../components/Page";

const Story = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{t("story.title")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Segment basic>
          <Image
            src="https://cataas.com/cat"
            size="small"
            floated="left"
            rounded
          />
          <p>{t("story.description-1")}</p>
          <Image
            src="https://cataas.com/cat"
            size="medium"
            floated="right"
            rounded
          />
          <p>{t("story.description-2")}</p>
        </Segment>
      </Grid>
    </Page>
  );
};

export default Story;
