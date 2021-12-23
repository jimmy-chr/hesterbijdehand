import React from "react";
import Menu from "./Menu";

const Page = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Menu>{props.children}</Menu>
    </>
  );
};

export default Page;
