import React from "react";
import styled from "styled-components";

const InterviewHistoryItem = () => {
  return (
    <HistoryItemContainer>
      <DocumentIcon src="images/ic_document.svg" alt="document_icon" />
      <ContentContainer>
        <CompanyName>네이버 (1)</CompanyName>
        <AdditionalInfo>
          <InfoRow>
            <InfoIcon src="images/ic_clock.svg" alt="clock_icon" />
            <div>12분 34초</div>
          </InfoRow>
          <InfoRow>
            <InfoIcon src="images/ic_score.svg" alt="score_icon" />
            <div>50 / 100</div>
          </InfoRow>
        </AdditionalInfo>
        <Comment>"아는 것은 많았지만 말은 많이 더듬어서 전체적으로 이상했던 면접"</Comment>
        <Skills>
          <SkillTag>Java</SkillTag>
          <SkillTag>JavaScript</SkillTag>
        </Skills>
        <DateInfo>2023/10/04(수) 17:45</DateInfo>
      </ContentContainer>
    </HistoryItemContainer>
  );
};

const HistoryItemContainer = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border: 1px solid #0000001A;
  border-radius: 20px;
  max-width: 320px;
  padding: 24px;
  gap: 8px;
`;

const DocumentIcon = styled.img`
  width: 48px;
  align-self: flex-start;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CompanyName = styled.div`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 4px;
  color: #3D437166;
  font-size: 14px;
`;

const InfoIcon = styled.img`
  width: 16px;
`;

const Comment = styled.div`
  color: #3D4371B2;
  font-weight: 700;
`;

const Skills = styled.div`
  display: flex;
  gap: 8px;
`;

const SkillTag = styled.div`
  background-color: #F9FAFB;
  padding: 4px 8px;
  border: 1px solid #0000001A;
  border-radius: 10px;
  color: #3D437199;
  font-weight: 700;
`;

const DateInfo = styled.div`
  margin-top: 4px;
  color: #3D437180;
  text-align: right;
  font-size: 14px;
`;

export default InterviewHistoryItem;
