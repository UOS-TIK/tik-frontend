import {
  InterviewQuestion,
  InterviewAnswer,
  Line,
  DialogFeedback,
  DialogScore,
} from "./style";

const Dialog = ({ question }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginRight: "10%",
        }}
      >
        <InterviewQuestion>{question.question}</InterviewQuestion>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "10%",
        }}
      >
        <InterviewAnswer>
          {question.awnswer}
          <Line />
          <DialogFeedback>
            <div style={{ fontWeight: "bold" }}>{question.feedback}</div>
            <DialogScore>{question.score}/100</DialogScore>
          </DialogFeedback>
        </InterviewAnswer>
      </div>
    </>
  );
};

export default Dialog;
