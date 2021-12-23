import styled from "styled-components";

export const MobileMenu = styled.div`
  @media (min-width: "425px") {
    visibility: hidden;
  }
`;

export const DesktopMenu = styled.div`
  @media (max-width: "425px") {
    visibility: hidden;
  }
`;
