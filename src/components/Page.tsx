import React, { useEffect } from "react";
import { Container, Segment } from "semantic-ui-react";
import { Media } from "./MediaContextProvider";
import Menu from "./Menu";
import * as S from "./page.styles";

const Page = (props: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Media at="sm">
        <Menu>{props.children}</Menu>
      </Media>

      <Media greaterThan="sm">
        <Container style={{ marginBottom: "1rem" }}>
          <Segment>
            <Menu>
              <S.Wrapper>{props.children}</S.Wrapper>
            </Menu>
          </Segment>
        </Container>
      </Media>
    </>
  );
};

export default Page;
