import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import InterviewHistoryItem from "../components/Main/InterviewHistoryItem";

const Main = () => {
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
      <div>
        <div style={{display: "flex", flexDirection: "row", margin: "50px 80px"}}>
          <div style={{display: "flex", flexGrow: "2", flexDirection: "column"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "4px"}}>
              <div style={{color: "#1C1C1C", fontWeight:"700", fontSize: "20px"}}>나의 면접 이력</div>
              <RightArrow src="images/ic_right_arrow.svg" alt="right_arrow_icon"/>
            </div>
            <div style={{marginTop: "20px", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
              <InterviewHistoryItem />
              <InterviewHistoryItem />
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", flexGrow: "1", marginTop: "48px", backgroundColor: "#D0D3E080", border: "1px solid #0000001A", borderRadius: "16px", padding: "16px", maxWidth: "280px", maxHeight: "160px", gap: "30px"}}>
            <div style={{marginTop: "30px", textAlign: "center", color: "#3D4371", fontSize: "17px"}}>면접을 생성하고,<br/> 맞춤 모의 면접을 경험해보세요!</div>
            <div style={{color: "#FFFFFF", backgroundColor: "#3D437180", padding: "12px 72px", borderRadius: "10px", fontWeight: "700"}}>모의 면접 만들기 +</div>
          </div>
        </div>
      </div>
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

const RightArrow = styled.img`
  width: 16px;
`;


export default Main;
