import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { Media } from "./MediaContextProvider";
import Menu from "./Menu";

const Page = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Media at="sm">
        <Menu>{props.children}</Menu>
      </Media>

      <Media greaterThan="sm">
        <Container>
          <Segment>
            <Menu>{props.children}</Menu>
          </Segment>
        </Container>
      </Media>
    </>
  );
};

export default Page;
