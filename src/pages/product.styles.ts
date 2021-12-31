import styled from "styled-components";

export const Wrapper = styled.div<{ selected: boolean }>`
  display: table;
  padding: 5px;
  cursor: pointer;
  border: 1px solid white;
  ${(props) =>
    props.selected &&
    `
      border: 1px solid #1B1C1D;
      border-radius: 0.28571429rem;
  `}
`;
