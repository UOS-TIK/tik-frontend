import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListWrapper } from "./style";
import HistoryListContainer from "./HistoryListContainer";

const HistoryList = ({
  historyList,
  setHistoryList,
  selectedHistoryId,
  setSelectedHistoryId,
  setLoading,
}) => {
  const { historyId } = useParams();
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    const firstHistory = historyList[0];
    if (cnt < 4 && historyId) setSelectedHistoryId(historyId);
    else if (firstHistory) {
      setSelectedHistoryId(firstHistory.interviewHistoryId);
    }
    setCnt((prevCnt) => prevCnt + 1);
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
