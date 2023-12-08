import React from "react";
import {
  HistoryItemContainer,
  DocumentIcon,
  ContentContainer,
  CompanyName,
  AdditionalInfo,
  InfoRow,
  InfoIcon,
  Comment,
  Skills,
  SkillTag,
  DateInfo,
} from "./style";

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
        <Comment>
          "아는 것은 많았지만 말은 많이 더듬어서 전체적으로 이상했던 면접"
        </Comment>
        <Skills>
          <SkillTag>Java</SkillTag>
          <SkillTag>JavaScript</SkillTag>
        </Skills>
        <DateInfo>2023/10/04(수) 17:45</DateInfo>
      </ContentContainer>
    </HistoryItemContainer>
  );
};

export default InterviewHistoryItem;
