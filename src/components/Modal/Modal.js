import { ModalTitle, ModalWrapper, SmallButtonWrapper } from "./style";
import Button, { ButtonFeature } from "../Button/Button";

export const ModalSize = {
  BIG: 0,
  SMALL: 1,
};

Object.freeze(ModalSize);

const Modal = ({ title, children, size, closeFunc }) => {
  return (
    <>
      <ModalWrapper size={size}>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <SmallButtonWrapper>
          <Button
            feature={ButtonFeature.FLEXIBLE}
            handler={() => closeFunc(false)}
          >
            닫기
          </Button>
        </SmallButtonWrapper>
      </ModalWrapper>
    </>
  );
};

export default Modal;
