import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Grid, Image, Header, Card, Divider } from "semantic-ui-react";
import ImageCarouselDots from "./ImageCarouselDots";
import collection from "../config/collection.json";
import { useTranslation } from "react-i18next";

const ImageCarousel = () => {
  const { i18n } = useTranslation();

  const language = i18n.language === "en" ? "en" : "nl";

  const slides = collection
    .filter((item) => item.carousel)
    .map((item, index) => {
      return (
        <Slide index={index} key={item.id}>
          <Grid>
            <Grid.Column width={8}>
              <Image src={item.pictures[0].file} size="large" rounded />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3">{item.name}</Header>
              {item.description[language]}
            </Grid.Column>
          </Grid>
        </Slide>
      );
    });

  const slidesCard = collection
    .filter((item) => item.carousel)
    .map((item, index) => {
      return (
        <Slide index={index} key={item.id}>
          <Grid padded>
            <Grid.Column width={8}>
              <Card>
                <Image src={item.pictures[0].file} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Description>
                    {item.description[language]}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </Slide>
      );
    });

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.5}
        totalSlides={slides.length}
        isPlaying={true}
      >
        <Slider style={{ margin: "auto", maxWidth: "1000px" }}>{slides}</Slider>
        <ImageCarouselDots slides={slides.length} />
      </CarouselProvider>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.8}
        totalSlides={slides.length}
        isPlaying={true}
      >
        <Slider style={{ margin: "auto", maxWidth: "700px" }}>
          {slidesCard}
        </Slider>
        <ImageCarouselDots slides={slidesCard.length} />
      </CarouselProvider>
    </>
  );
};

export default ImageCarousel;
