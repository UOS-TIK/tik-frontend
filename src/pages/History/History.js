import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import ImageText, {
  ImageTextColor,
} from "../../components/ImageText/ImageText";
import {
  MainContainer,
  ContentContainer,
  TitleWrapper,
  HistorySettingTitle,
  RightArrow,
  WhiteBoxContainer,
} from "./style";
import HistoryList from "./HistoryList";
import HistoryView from "./HistoryView";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const [selectedHistoryId, setSelectedHistoryId] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHistoryList();
  }, []);

  const getHistoryList = async () => {
    try {
      const res = await api.get("/history/list");
      if (res.status === 200) {
        setHistoryList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("[History]getHistoryList");
    }
  };

  return (
    <MainContainer>
      <Header />
      <MainBanner
        badgeText="면접 피드백"
        badgeType="filled"
        title="정리한 면접 결과와 피드백을 읽어보세요!"
        description="자신의 강점과 약점을 파악하고 보완하여, 다시 면접을 연습해보세요."
        imageUrl="/images/ic_feedback.svg"
        bgColor="#8D99F3"
      />
      <ContentContainer>
        <div style={{ width: "400px", marginBottom: "20px" }}>
          <TitleWrapper>
            <HistorySettingTitle>
              나의 면접 이력
              <RightArrow
                src="/images/ic_right_arrow.svg"
                alt="right_arrow_icon"
              />
            </HistorySettingTitle>
          </TitleWrapper>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
          <HistoryList
            historyList={historyList}
            setHistoryList={setHistoryList}
            selectedHistoryId={selectedHistoryId}
            setSelectedHistoryId={setSelectedHistoryId}
            setLoading={setLoading}
          />
          <WhiteBoxContainer>
            {historyList.length === 0 ? (
              <ImageText
                imageUrl="/images/ic_empty_document.svg"
                color={ImageTextColor.BLUE}
              >
                조회할 면접 이력이 없습니다.
                <br />
                면접을 생성해주세요.
              </ImageText>
            ) : (
              <HistoryView
                selectedHistoryId={selectedHistoryId}
                setHistoryList={setHistoryList}
                loading={loading}
                setLoading={setLoading}
              />
            )}
          </WhiteBoxContainer>
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default History;
