import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Container, Divider, Grid, Image } from "semantic-ui-react";

import CustomDotGroup from "./CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={0.5}
    totalSlides={3}
    isPlaying
  >
    <Slider style={{ margin: "auto", maxWidth: "1000px" }}>
      <Slide index={0}>
        <Grid>
          <Grid.Column width={8}>
            <div style={{ maxHeight: "300px" }}>
              <Image src="https://cataas.com/cat" />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>Kat 1</Grid.Column>
        </Grid>
      </Slide>
      <Slide index={1}>
        <Grid>
          <Grid.Column width={8}>
            <Image src="https://cataas.com/cat" />
          </Grid.Column>
          <Grid.Column width={8}>Kat 2</Grid.Column>
        </Grid>
      </Slide>
      <Slide index={2}>
        <Grid>
          <Grid.Column width={8}>
            <Image src="https://cataas.com/cat" />
          </Grid.Column>
          <Grid.Column width={8}>Kat 3</Grid.Column>
        </Grid>
      </Slide>
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
