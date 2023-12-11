import styled from "styled-components";
import { ModalSize } from "./Modal";

export const ModalWrapper = styled.div`
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 42%;
  left: 50%;
  transform: ${(props) =>
    props.isModalOn ? "translate(-50%, -50%)" : "translate(-50%, -40%)"};
  display: flex;
  width: ${(props) => (props.size === ModalSize.BIG ? "800px" : "420px")};
  padding: 24px 24px 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 3px solid rgba(68, 68, 68, 0.5);
  background: #f9fafb;
`;

export const ModalTitle = styled.div`
  color: rgba(28, 28, 28, 0.7);
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.8px;
  padding-bottom: 8px;
`;

export const SmallButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;
