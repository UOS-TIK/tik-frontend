import styled from 'styled-components';
import {DotLoader} from 'react-spinners';

const LoaderModal = () => {

  return (
    <ModalContainer>
      <div style={{textAlign: "center"}}>면접을 생성하는 중입니다. <br /> 조금만 기다려주세요.</div>
      <DotLoader color="#3d4371" />
    </ModalContainer>
  );
};

export default LoaderModal;

const ModalContainer = styled.div`
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.isModalOn ? "translate(-50%, -50%)" : "translate(-50%, -40%)"};
  display: flex;
  width: 360px;
  padding: 24px 24px 34px 24px;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 3px solid rgba(68, 68, 68, 0.5);
  background: #f9fafb;
  align-items: center;
  color: #3D4371;
  font-weight: 600;
`;
