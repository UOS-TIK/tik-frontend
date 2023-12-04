import styled from "styled-components";

export const ModalWrapper = styled.div`
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.isModalOn ? "translate(-50%, -50%)" : "translate(-50%, -40%)"};
  display: flex;
  width: 368px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid rgba(61, 67, 113, 0.3);
  background: #fff;
`;
