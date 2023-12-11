import { useEffect, useState } from "react";
import api from "../../api/api";
import {
  HistoryContainer,
  HistoryContainerImage,
  HistoryTextWrapper,
  HistoryTitle,
  HistoryIntroduction,
  HistoryDeleteImage,
} from "./style";

const HistoryListContainer = ({
  history,
  setHistoryList,
  setSelectedHistoryId,
  selectedHistoryId,
  setLoading,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    //console.log("selectedHistoryId", selectedHistoryId);
    //console.log("history.interviewHistoryId", history.interviewHistoryId);
    //console.log("check", history.interviewHistoryId - selectedHistoryId);
    if (history.interviewHistoryId - selectedHistoryId === 0) {
      setSelected(true);
      //console.log("true");
    } else setSelected(false);
  }, [selectedHistoryId]);

  const clickHistory = () => {
    if (!selected) setSelectedHistoryId(history.interviewHistoryId);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  function onClickDeleteButton() {
    const result = window.confirm("해당 면접 이력를 삭제하시겠습니까?");
    if (result) {
      deleteHistory();
    }
  }

  const deleteHistory = async () => {
    try {
      setLoading(true);
      const res = await api.delete(`/history/delete/${selectedHistoryId}`);
      if (res.status === 200) {
        setHistoryList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("delete", e.response.data.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HistoryContainer selected={selected} onClick={clickHistory}>
      <HistoryContainerImage
        src={
          selected
            ? "/images/history_scrap_color.svg"
            : "/images/history_scrap.svg"
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
              : history.beginTime.replace("T", " ")}
          </HistoryIntroduction>
        </HistoryTextWrapper>
        <HistoryDeleteImage
          src={"/images/ic_history.svg"}
          onClick={onClickDeleteButton}
        />
      </div>
    </HistoryContainer>
  );
};

export default HistoryListContainer;
