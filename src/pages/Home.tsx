import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Grid, Image, Header, Divider } from "semantic-ui-react";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image src="https://cataas.com/cat" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h2">Welkom</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              risus ultricies tristique nulla aliquet enim tortor at. Sagittis
              id consectetur purus ut faucibus pulvinar elementum. Accumsan
              tortor posuere ac ut consequat semper viverra nam libero. Lacus
              viverra vitae congue eu. Sagittis id consectetur purus ut faucibus
              pulvinar elementum integer enim.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit.
              Tellus molestie nunc non blandit massa. Vulputate mi sit amet
              mauris commodo quis imperdiet massa tincidunt. Tortor posuere ac
              ut consequat semper viverra nam. Lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt. Eget nulla
              facilisi etiam dignissim. Aliquet risus feugiat in ante metus.
              Hendrerit dolor magna eget est. Nibh cras pulvinar mattis nunc sed
              blandit. Senectus et netus et malesuada fames ac turpis. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width={16}>
            <ImageCarousel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Home;
