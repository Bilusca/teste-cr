import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  overflow-x: auto;
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    padding: 25px 40px;
    background: #eee;
    border-radius: 3px;
  }

  p {
    font-size: 16px;
    color: #746a6a;
    margin: 10px 0 2px 0;

    &:last-child {
      margin: 0;
      color: #3486e6;
      font-weight: bold;
    }
  }
`;
