import { BoardStyle, BoardTextStyle } from "./style";
import Button, { Feature, Color } from "../Button/Button";

const Board = ({ children, buttonText, buttonHandler }) => {
  return (
    <BoardStyle>
      <Button feature={Feature.NONE} color={Color.BLUE} handler={buttonHandler}>
        {buttonText}
      </Button>
      <BoardTextStyle>{children}</BoardTextStyle>
    </BoardStyle>
  );
};

export default Board;
