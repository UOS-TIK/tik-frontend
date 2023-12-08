import { useEffect, useState } from "react";
import api from "../../api/api";
import { HistoryTextStyle, HistoryViewFeedBack } from "./style";
import HistoryViewDetail from "./HistoryViewDetail";
import HistoryViewResult from "./HistoryViewResult";
import HistoryViewDialog from "./HistoryViewDialog";
import ImageText, {
  ImageTextColor,
} from "../../components/ImageText/ImageText";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";

const HistoryView = (props) => {
  const { selectedHistoryId, loading, setLoading } = props;

  const [history, setHistory] = useState({});

  useEffect(() => {
    if (selectedHistoryId !== 0) getHistory();
  }, [selectedHistoryId]);

  const getHistory = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `/history/view?interviewHistoryId=${selectedHistoryId}`
      );
      if (res.status === 200) {
        setHistory(res.data.data);
        console.log(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("[HistoryView]getHistory");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <span>로딩중</span>
      ) : (
        <>
          <div style={{ width: "100%" }}>
            <HistoryTextStyle>
              {history.beginTime.replace("T", " ")} 제작
            </HistoryTextStyle>
          </div>
          <HistoryViewDetail history={history} />
          {history.comment === null ? (
            <div
              style={{
                width: "100%",
                height: "350px",
                borderRadius: "20px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <ImageText
                imageUrl="images/ic_resume.svg"
                color={ImageTextColor.BLUE}
              >
                피드백 및 저장 중입니다.
                <br />약 10분 후 확인하실 수 있습니다.
              </ImageText>
            </div>
          ) : (
            <>
              <HistoryViewResult history={history} />
              <HistoryViewFeedBack>
                <Textarea
                  label="피드백"
                  color={TextareaColor.GRAY}
                  value={history.comment}
                  readOnly
                />
              </HistoryViewFeedBack>
              <HistoryViewDialog dialog={history.question} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default HistoryView;
