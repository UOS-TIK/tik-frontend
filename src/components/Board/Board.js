import { BoardStyle, BoardTextStyle } from "./style";
import Button, { Feature, Color } from "../Button/Button";

const Board = ({ children, buttonText, buttonHandler }) => {
  return (
    <BoardStyle>
      <div style={{ width: "300px" }}>
        <Button
          feature={Feature.NONE}
          color={Color.BLUE}
          handler={buttonHandler}
        >
          {buttonText}
        </Button>
      </div>
      <BoardTextStyle>{children}</BoardTextStyle>
    </BoardStyle>
  );
};

export default Board;
