import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 25px;
  min-height: 325px;
  border: 1px solid #e1e1e1;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.div`
  width: 100%;
  span {
    font-size: 18px;
    font-weight: bold;
    color: #363636;
  }
`;

export const NoItens = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 20px;
  }

  span {
    text-align: center;
    color: #746a6a;
    font-size: 14px;
    font-weight: normal;
  }
`;
