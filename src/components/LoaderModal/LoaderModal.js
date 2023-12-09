import {DotLoader} from 'react-spinners';
import { ModalContainer } from './style';

const LoaderModal = () => {

  return (
    <ModalContainer>
      <div style={{textAlign: "center"}}>면접을 생성하는 중입니다. <br /> 조금만 기다려주세요.</div>
      <DotLoader color="#3d4371" />
    </ModalContainer>
  );
};

export default LoaderModal;

