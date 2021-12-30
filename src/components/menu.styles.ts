import styled from "styled-components";
import { Media as MediaContext } from "./MediaContextProvider";

export const Media = styled(MediaContext)`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  background: white;
  margin-bottom: 1rem;
`;
