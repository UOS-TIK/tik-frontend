import { BoardStyle, BoardTextStyle } from "./style";
import Button, { ButtonFeature, ButtonColor } from "../Button/Button";

const Board = ({ children, buttonText, buttonHandler }) => {
  return (
    <BoardStyle>
      <Button
        feature={ButtonFeature.NONE}
        color={ButtonColor.BLUE}
        handler={buttonHandler}
      >
        {buttonText}
      </Button>
      <BoardTextStyle>{children}</BoardTextStyle>
    </BoardStyle>
  );
};

export default Board;
