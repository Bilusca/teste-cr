import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow-x: auto;

  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;
