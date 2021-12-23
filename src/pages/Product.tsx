import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Grid, Image, Item } from "semantic-ui-react";
import collection from "../config/collection.json";
import * as S from "./product.styles";
import ImageModal from "../components/ImageModal";
import Page from "../components/Page";

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const { i18n } = useTranslation();

  const item = collection.find((c) => c.id === id);

  const language = i18n.language === "en" ? "en" : "nl";

  const onImageClick = (
    index: number,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setSelectedImage(index);
  };

  if (!item) return null;

  const imageList = item.pictures.map((picture, index) => {
    return (
      <React.Fragment key={picture.file + index}>
        <S.Wrapper
          selected={index === selectedImage}
          onClick={(e) => onImageClick(index, e)}
        >
          <Image src={picture.file} size="small" centered />
        </S.Wrapper>
        <br />
      </React.Fragment>
    );
  });

  return (
    <Page>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column width={8}>
            <ImageModal src={item.pictures[selectedImage].file}>
              <Image
                src={item.pictures[selectedImage].file}
                size="big"
                centered
              />
            </ImageModal>
          </Grid.Column>
          <Grid.Column width={3}>{imageList}</Grid.Column>
          <Grid.Column width={5}>
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header>{item.name}</Item.Header>
                  <Item.Meta>{item.meta[language]}</Item.Meta>
                  <Item.Description>
                    {item.description[language]}
                  </Item.Description>
                  <Item.Extra>{item.additional[language]}</Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Page>
  );
};

export default Product;
