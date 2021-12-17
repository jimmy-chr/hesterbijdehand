import styled from "styled-components";

export const Wrapper = styled.div<{ selected: boolean }>`
  display: table;
  padding: 5px;
  ${(props) =>
    props.selected &&
    `
      border: 1px solid black;
  `}
`;
