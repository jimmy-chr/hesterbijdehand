import React from "react";
import Menu from "./Menu";
import * as S from "./page.styles";

const Page = (props: { children: React.ReactNode }) => {
  return (
    <S.Sticky>
      <Menu>{props.children}</Menu>
    </S.Sticky>
  );
};

export default Page;
