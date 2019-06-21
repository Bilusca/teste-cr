import styled, { keyframes } from "styled-components";

const showGame = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) 
  }

  100% {
    opacity: 1;
    transform: scale(1)
  }
`;

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${showGame} 0.2s linear;
`;

export const ImageBox = styled.div`
  padding: 25px 40px;
  background: #eee;
  border-radius: 3px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoAndPrices = styled.div`
  height: 50px;
  background: #fff;
  padding: 0;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    color: #746a6a;

    &:last-child {
      margin: 0;
      color: #3486e6;
      font-weight: bold;
    }
  }
`;
