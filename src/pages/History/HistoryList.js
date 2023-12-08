import { useEffect } from "react";
import { ListWrapper } from "./style";
import HistoryListContainer from "./HistoryListContainer";

const HistoryList = (props) => {
  const {
    historyList,
    setHistoryList,
    selectedHistoryId,
    setSelectedHistoryId,
    setLoading,
  } = props;

  useEffect(() => {
    const firstHistory = historyList[0];
    if (firstHistory) {
      setSelectedHistoryId(firstHistory.interviewHistoryId);
    }
  }, [historyList]);

  return (
    <ListWrapper>
      {historyList.map((history) => (
        <HistoryListContainer
          key={history.id}
          history={history}
          setHistoryList={setHistoryList}
          selectedHistoryId={selectedHistoryId}
          setSelectedHistoryId={setSelectedHistoryId}
          setLoading={setLoading}
        />
      ))}
    </ListWrapper>
  );
};

export default HistoryList;
