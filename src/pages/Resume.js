import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import Button, { Feature } from "../components/Button/Button";

const Resume = () => {
  return (
    <MainContainer>
      <Header />
      <MainBanner
        badgeText="모의면접 생성"
        badgeType="outlined"
        title="Part 1. 어떤 면접인지 입력해 주세요"
        description="이력서 작성 페이지를 통해 미리 작성할 수 있으며, 선택한 이력서를 바탕으로 질문이 생성됩니다."
        imageUrl="images/ic_resume.svg"
        bgColor="#3d4371"
      />

      <ContentContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            JustifyContent: "space-between",
            maxWidth: "400px",
          }}
        >
          <InterviewSettingTitle>
            나의 이력서
            <RightArrow
              src="images/ic_right_arrow.svg"
              alt="right_arrow_icon"
            />
          </InterviewSettingTitle>
          <Button feature={Feature.FLEXIBLE}>이력서 추가</Button>
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default Resume;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  height: 100vh;
`;

const InterviewSettingTitle = styled.div`
  color: #1c1c1c;
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 57.5px 80px;
  height: auto;
`;
