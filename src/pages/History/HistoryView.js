import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import {
  ButtonWrapper,
  HistoryTextStyle,
  LabelStyle,
  ItemContainer,
  MainLabelStyle,
} from "./style";
import Content from "./Content";

const HistoryView = (props) => {
  const { selectedHistoryId, setHistoryList, setAddMode, loading, setLoading } =
    props;

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
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("[HistoryView]getHistory");
    } finally {
      setLoading(false);
    }
  };

  const deleteHistory = async () => {
    try {
      setLoading(true);
      const res = await api.patch(`/history/disable/${selectedHistoryId}`);
      if (res.status === 204) {
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
    <>
      {loading ? (
        <span>로딩중</span>
      ) : (
        <>
          <div style={{ width: "100%" }}>
            <HistoryTextStyle>2023/10/04(수) 17:45 제작</HistoryTextStyle>
          </div>
          <Content label="면접 상세 정보">
            <ItemContainer>
              <LabelStyle>
                - 회사 이름:{" "}
                <MainLabelStyle>{history.interviewName}</MainLabelStyle>
              </LabelStyle>
            </ItemContainer>
          </Content>
        </>
      )}
    </>
  );
};

export default HistoryView;
