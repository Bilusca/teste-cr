import styled from "styled-components";

export const Wrapper = styled.div`
  height: 56px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
`;

export const ImageBox = styled.div`
  background: #eeeeee;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 41px;
    width: 41px;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

  p {
    font-size: 14px;
    color: #7f7575;

    &:last-child {
      color: #423b3b;
      font-weight: bold;
      margin-top: 2px;
    }
  }
`;
