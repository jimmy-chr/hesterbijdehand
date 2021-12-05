import { Dot } from "pure-react-carousel";
import React from "react";
import { Button, Container, SemanticSIZES } from "semantic-ui-react";

const ImageCarouselDots = ({
  slides,
  size = "mini",
}: {
  slides: number;
  size?: SemanticSIZES;
}) => {
  let buttonList = [];

  for (let slide = 0; slide < slides; slide++) {
    buttonList.push(
      <Button as={Dot} key={slide} icon="circle" slide={slide} />
    );
  }
  return (
    <Container textAlign="center">
      <Button.Group size={size}>{buttonList}</Button.Group>
    </Container>
  );
};

export default ImageCarouselDots;
