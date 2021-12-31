import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Header, Item, Segment } from "semantic-ui-react";
import collection from "../config/collection.json";
import { useNavigate } from "react-router-dom";
import * as S from "./collection.styles";
import Page from "../components/Page";

const Collection = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();

  const language = i18n.language === "en" ? "en" : "nl";

  const goToProduct = (id: string) => {
    navigate(`/collectie/${id}`);
  };

  const items = collection.map((item) => {
    return (
      <Item key={item.id} onClick={() => goToProduct(item.id)}>
        <S.Wrapper>
          <Item.Image size="medium" src={item.pictures[0].file} rounded />
          <Item.Content>
            <Item.Header>{item.name}</Item.Header>
            <Item.Meta>{item.meta[language]}</Item.Meta>
            <Item.Description>{item.description[language]}</Item.Description>
            <Item.Extra>{item.additional[language]}</Item.Extra>
          </Item.Content>
        </S.Wrapper>
      </Item>
    );
  });

  return (
    <Page>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2">{t("collection.title")}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>{t("collection.description")}</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment basic>
              <Item.Group divided>{items}</Item.Group>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
};

export default Collection;
