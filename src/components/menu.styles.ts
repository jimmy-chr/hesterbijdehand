import styled from "styled-components";
import { Media as MediaContext } from "./MediaContextProvider";
import { Segment } from "semantic-ui-react";

export const Media = styled(MediaContext)`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  background: white;
  padding-bottom: 1rem;
`;

export const MobileSegment = styled(Segment)`
  border: 0 !important;
`;
