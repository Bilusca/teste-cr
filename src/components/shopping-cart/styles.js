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
  margin-bottom: 20px;

  display: flex;
  align-items: center;

  strong {
    font-size: 18px;
    font-weight: bold;
    color: #363636;
    margin-right: 3px;
  }

  span {
    font-size: 14px;
    font-weight: normal;
    color: #7f7575;
  }

  button {
    display: none;
    background: none;
    border: 1px solid #e1e1e1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    margin-right: 10px;

    color: #e1e1e1;
    font-size: 18px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    button {
      display: block;
    }
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

export const ItemsList = styled.div`
  width: 100%;
`;

export const Totals = styled.div`
  align-self: flex-end;

  width: 100%;
  margin-top: 30px;

  div {
    width: 100%;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #7f7575;
      font-size: 14px;

      &:last-child {
        color: #423b3b;
        font-weight: bold;
        font-size: ${props => (props.total ? "20px" : "16px")};
      }
    }
  }

  button {
    width: 100%;
    height: 50px;
    background: #54a3ff;
    border-radius: 3px;
    cursor: pointer;
    border: 0;
    outline: 0;

    color: #fff;
    font-size: 14px;
    font-weight: bold;

    transition: 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.7;
    }
  }
`;
