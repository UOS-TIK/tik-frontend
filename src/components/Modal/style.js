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
  width: 416px;
  padding: 24px 24px 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 3px solid rgba(68, 68, 68, 0.5);
  background: #f9fafb;
`;
