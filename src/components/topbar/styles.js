import styled from "styled-components";
import ArrowDownIcon from "../../assets/arrow-down-icon.svg";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  button {
    display: none;
    background: none;
    border: 1px solid #e1e1e1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    outline: none;

    span {
      position: absolute;
      width: 15px;
      height: 15px;
      background: #54a3ff;
      font-size: 12px;
      font-weight: bold;
      border-radius: 50%;
      text-align: center;
      color: #fff;
    }

    img {
      width: 70%;
      height: 70%;
    }
  }

  h3 {
    color: #363636;
    font-size: 48px;
    margin: 0;
  }

  select {
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    width: 260px;
    height: 40px;
    padding: 10px 15px;
    background: url(${ArrowDownIcon}) no-repeat 240px;
    -webkit-appearance: none;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;

    button {
      display: flex;
    }
  }
`;
