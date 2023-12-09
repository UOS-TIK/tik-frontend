import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  width: 360px;
  padding: 24px 24px 34px 24px;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 2px solid rgba(68, 68, 68, 0.5);
  background: #f9fafb;
  align-items: center;
  color: #3D4371;
  font-weight: 600;
`;
