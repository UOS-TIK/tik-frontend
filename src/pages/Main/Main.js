import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InterviewHistoryItem from "./InterviewHistoryItem";
import MainBanner from "../../components/MainBanner/MainBanner";
import Board from "../../components/Board/Board";
import {
  MainContainer,
  InterviewSection,
  InterviewHistory,
  HistorySectionTitle,
  RightArrow,
  HistoryItems,
} from "./style";

const Main = () => {
  const navigate = useNavigate();

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
          <HistoryItems>
            <InterviewHistoryItem />
            <InterviewHistoryItem />
          </HistoryItems>
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
