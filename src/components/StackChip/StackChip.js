import { ChipWrapper } from "./style";

const StackChip = ({ id, children, clickAble, handler }) => {
  if (!clickAble) clickAble = false;

  return <ChipWrapper onClick={handler}>{children}</ChipWrapper>;
};

export default StackChip;
