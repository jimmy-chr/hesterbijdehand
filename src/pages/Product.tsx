import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Product = () => {
  return (
    <Grid verticalAlign="middle">
      <Grid.Row columns={2}>
        <Grid.Column width={10}>
          <Image src="https://cataas.com/cat" size="big" centered />
        </Grid.Column>
        <Grid.Column width={6}>
          <Image src="https://cataas.com/cat" size="small" centered />
          <br />
          <Image src="https://cataas.com/cat" size="small" centered />
          <br />
          <Image src="https://cataas.com/cat" size="small" centered />
          <br />
          <Image src="https://cataas.com/cat" size="small" centered />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Product;
