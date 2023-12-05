import { useEffect, useState } from "react";
import { ListWrapper } from "./style";
import HistoryListContainer from "./HistoryListContainer";

const HistoryList = (props) => {
  const { historyList, selectedHistoryId, setSelectedHistoryId } = props;

  useEffect(() => {
    const firstHistory = historyList[0];
    if (firstHistory) {
      setSelectedHistoryId(firstHistory.InterviewHistoryId);
    }
  }, [historyList]);

  return (
    <ListWrapper>
      {historyList.map((history) => (
        <HistoryListContainer
          key={history.id}
          history={history}
          selectedHistoryId={selectedHistoryId}
          setSelectedHistoryId={setSelectedHistoryId}
        />
      ))}
    </ListWrapper>
  );
};

export default HistoryList;
