import { useEffect, useState } from "react";
import {
  HistoryContainer,
  HistoryContainerImage,
  HistoryTextWrapper,
  HistoryTitle,
  HistoryIntroduction,
  HistoryDeleteImage,
} from "./style";

const HistoryListContainer = (props) => {
  const { history, setSelectedHistoryId, selectedHistoryId } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (history.interviewHistoryId === selectedHistoryId) {
      setSelected(true);
    } else setSelected(false);
  }, [selectedHistoryId]);

  const clickHistory = () => {
    if (!selected) setSelectedHistoryId(history.interviewHistoryId);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <HistoryContainer selected={selected} onClick={clickHistory}>
      <HistoryContainerImage
        src={
          selected
            ? "images/history_scrap_color.svg"
            : "images/history_scrap.svg"
        }
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HistoryTextWrapper>
          <HistoryTitle>
            {history.interviewName}({history.company})
          </HistoryTitle>
          <HistoryIntroduction>
            {history.beginTime === null
              ? "진행되지 않은 면접입니다."
              : history.beginTime}
          </HistoryIntroduction>
        </HistoryTextWrapper>
        <HistoryDeleteImage src={"images/ic_history.svg"} />
      </div>
    </HistoryContainer>
  );
};

export default HistoryListContainer;
