import { HistoryTextStyle, DialogWrapper } from "./style";
import Dialog from "./Dialog";

const HistoryViewDialog = ({ dialog }) => {
  return (
    <>
      <DialogWrapper>
        <div style={{ marginBottom: "8px" }}>
          <HistoryTextStyle>상세대화</HistoryTextStyle>
        </div>
        {dialog.map((question, index) => (
          <Dialog key={index} question={question} />
        ))}
      </DialogWrapper>
    </>
  );
};

export default HistoryViewDialog;
