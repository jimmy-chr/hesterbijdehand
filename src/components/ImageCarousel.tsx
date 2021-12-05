import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ImageCarouselDots from "./ImageCarouselDots";
import collection from "../config/collection.json";
import { useTranslation } from "react-i18next";

const ImageCarousel = () => {
  const { t, i18n } = useTranslation();

  const language = i18n.language === "en" ? "en" : "nl";

  const slides = collection
    .filter((item) => item.carousel)
    .map((item, index) => {
      return (
        <Slide index={index} key={item.id}>
          <Grid>
            <Grid.Column width={8}>
              <Image src={item.pictures[0].file} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3">{item.name}</Header>
              {item.description[language]}
            </Grid.Column>
          </Grid>
        </Slide>
      );
    });

  return (
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={0.5}
      totalSlides={slides.length}
      isPlaying={false}
    >
      <Slider style={{ margin: "auto", maxWidth: "1000px" }}>{slides}</Slider>
      <ImageCarouselDots slides={slides.length} />
    </CarouselProvider>
  );
};

export default ImageCarousel;
