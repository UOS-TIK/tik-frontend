import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import api from "../../api/api";
import Header from "../../components/Header";
import InterviewHistoryItem from "./InterviewHistoryItem";
import MainBanner from "../../components/MainBanner/MainBanner";
import Board from "../../components/Board/Board";
import ImageText, {
  ImageTextColor,
} from "../../components/ImageText/ImageText";
import {
  MainContainer,
  InterviewSection,
  InterviewHistory,
  HistorySectionTitle,
  RightArrow,
  HistoryItems,
} from "./style";

const Main = () => {
  const [historyList, setHistoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getHistoryList();
  }, []);

  const getHistoryList = async () => {
    try {
      setLoading(true);
      const res = await api.get("/history/list");
      if (res.status === 200) {
        setHistoryList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("[History]getHistoryList");
    } finally {
      setLoading(false);
    }
  };

  const handleInterviewClick = () => {
    navigate("/generate-interview");
  };

  return (
    <MainContainer>
      <Header />
      <MainBanner
        badgeText="실제 면접과 유사"
        badgeType="filled"
        title="AI 면접관의 목소리를 들어보세요!"
        description="면접관과 목소리로 대화하며 면접 실전 감각을 기를 수 있습니다."
        imageUrl="images/banner_img.svg"
        bgColor="#8D99F3"
      />
      <InterviewSection>
        <InterviewHistory>
          <HistorySectionTitle>
            나의 면접 이력
            <RightArrow
              src="images/ic_right_arrow.svg"
              alt="right_arrow_icon"
            />
          </HistorySectionTitle>
          <div style={{ width: "100%", height: "100%" }}>
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: "350px",
                  borderRadius: "20px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SyncLoader color="#3d4371" />
              </div>
            ) : (
              <>
                {historyList.length === 0 ||
                historyList.filter((history) => history.endTime !== null)
                  .length === 0 ? (
                  <div
                    style={{
                      width: "100%",
                      height: "350px",
                      borderRadius: "20px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#fff",
                    }}
                  >
                    <ImageText
                      imageUrl="/images/ic_empty_document.svg"
                      color={ImageTextColor.BLUE}
                    >
                      면접 이력이 없어요.
                      <br />
                      면접을 생성해주세요.
                    </ImageText>
                  </div>
                ) : (
                  <HistoryItems>
                    {historyList
                      .filter((history) => history.endTime !== null)
                      .map((history) => (
                        <InterviewHistoryItem
                          key={history.interviewHistoryId}
                          history={history}
                        />
                      ))}
                  </HistoryItems>
                )}
              </>
            )}
          </div>
        </InterviewHistory>
        <Board
          buttonText="면접 생성하기 +"
          buttonHandler={handleInterviewClick}
        >
          면접을 생성하고, <br />
          맞춤 모의 면접을 경험해보세요!
        </Board>
      </InterviewSection>
    </MainContainer>
  );
};

export default Main;
