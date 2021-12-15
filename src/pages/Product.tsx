import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";
import collection from "../config/collection.json";
import * as S from "./product.styles";

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [count, setCount] = useState(0);

  console.log(id);

  const item = collection.find((c) => c.id === id);

  console.log(item);

  const onImageClick = (e: React.MouseEvent, index: number) => {
    return (event: React.MouseEvent) => {
      setSelectedImage(index);
      event.preventDefault();
    };
  };

  const imageList = item?.pictures.map((picture, index) => {
    return (
      <React.Fragment key={picture.file + index}>
        <S.Wrapper
          selected={index === selectedImage}
          onClick={() => setCount(count + 1)}
        >
          <Image src={picture.file} size="small" centered />
        </S.Wrapper>
        <br />
      </React.Fragment>
    );
  });

  return (
    <Grid verticalAlign="middle">
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <Image src={item?.pictures[selectedImage].file} size="big" centered />
        </Grid.Column>
        <Grid.Column width={6}>{imageList}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Product;
