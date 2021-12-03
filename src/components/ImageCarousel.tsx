import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider, Image } from "semantic-ui-react";

import CustomDotGroup from "./CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={0.5}
    naturalSlideHeight={0.3}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://cataas.com/cat" />
        Kat 1
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://cataas.com/cat" />
        Kat 2
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://cataas.com/cat" />
        Kat3
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
