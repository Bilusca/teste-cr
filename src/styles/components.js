import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 70px;
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const Content = styled.div`
  flex: 3;
  margin-right: 30px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex: 1;
    margin-right: 0;
  }
`;

export const Aside = styled.aside`
  flex: 1;

  overflow: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
