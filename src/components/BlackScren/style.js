import styled from "styled-components";

export const BlackScreenStyle = styled.div`
  transition: all 0.3s ease-in-out;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(1px);
`;
