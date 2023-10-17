import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import InterviewHistoryItem from "../components/Main/InterviewHistoryItem";

const Main = () => {
  const navigate = useNavigate();

  const handleInterviewClick = () => {
    navigate('/generate-interview');
  };

  return (
    <MainContainer>
      <Header />
      <MainBanner>
        <ContentWrapper>
          <StyledBadge>실제 면접과 유사</StyledBadge>
          <ContentText>
            <BannerTitle>AI 면접관의 목소리를 들어보세요!</BannerTitle>
            <Description>면접관과 목소리로 대화하며 면접 실전 감각을 기를 수 있습니다.</Description>
          </ContentText>
        </ContentWrapper>
        <BannerImage src="images/banner_img.svg" alt="banner_img" />
      </MainBanner>
      <InterviewSection>
        <InterviewHistory>
          <HistorySectionTitle>
            나의 면접 이력
            <RightArrow src="images/ic_right_arrow.svg" alt="right_arrow_icon" />
          </HistorySectionTitle>
          <HistoryItems>
            <InterviewHistoryItem />
            <InterviewHistoryItem />
          </HistoryItems>
        </InterviewHistory>
        <CreateInterview>
          <CreateInterviewText>면접을 생성하고, 맞춤 모의 면접을 경험해보세요!</CreateInterviewText>
          <CreateButton onClick={handleInterviewClick}>모의 면접 만들기 +</CreateButton>
        </CreateInterview>
      </InterviewSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9FAFB;
  height: 100vh;
`;

const MainBanner = styled.div`
  display: flex;
  justify-content: space-around;
  background: #8d99f3;
  width: 100%;
  height: 300px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`;

const StyledBadge = styled.div`
  width: fit-content;
  color: #ffffffcc;
  background-color: #3d4371;
  padding: 6px 8px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
`;

const ContentText = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BannerTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
`;

const Description = styled.div`
  font-size: 17px;
`;

const BannerImage = styled.img`
  width: 265px;
`;


const InterviewSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 148px;
`;

const InterviewHistory = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

const HistorySectionTitle = styled.div`
  color: #1C1C1C;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const RightArrow = styled.img`
  width: 17px;
  margin-left: 4px;
`;

const HistoryItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CreateInterview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-top: 48px;
  background-color: #D0D3E080;
  border: 1px solid #0000001A;
  border-radius: 16px;
  padding: 16px;
  max-width: 280px;
  max-height: 160px;
  gap: 30px;
`;

const CreateInterviewText = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #3D4371;
  font-size: 17px;
`;

const CreateButton = styled.div`
  color: #FFFFFF;
  background-color: #3D437180;
  padding: 12px 72px;
  border-radius: 10px;
  font-weight: 700;
`;

export default Main;
