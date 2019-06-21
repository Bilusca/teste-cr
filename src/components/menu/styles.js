import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #fff;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  overflow: scroll;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    display: ${props => (props.open ? "flex" : "none")};
    flex: 1;
  }
`;
