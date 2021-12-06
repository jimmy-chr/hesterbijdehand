import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "3em 0em", marginTop: "1em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Info" />
              <List link inverted>
                <List.Item as="a" href="/over-mij">
                  Over mij
                </List.Item>

                <Link to="/contact">
                  <List.Item as="a">Contact</List.Item>
                </Link>
                <Link to="/atelier">
                  <List.Item as="a">Atelier</List.Item>
                </Link>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Diensten" />
              <List link inverted>
                <List.Item as="a">Aimant</List.Item>
                <List.Item as="a">Maatwerk</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Dolor sit amet consectetur adipiscing. Venenatis lectus magna
                fringilla urna porttitor rhoncus dolor. Amet massa vitae tortor
                condimentum lacinia quis.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
