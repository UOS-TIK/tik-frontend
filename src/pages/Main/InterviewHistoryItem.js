import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HistoryItemContainer,
  DocumentIcon,
  ContentContainer,
  CompanyName,
  AdditionalInfo,
  InfoRow,
  InfoIcon,
  Comment,
  DateInfo,
} from "./style";

const InterviewHistoryItem = ({ history }) => {
  const navigate = useNavigate();
  const { minutes, seconds } = getTimeDifference(
    history.beginTime,
    history.endTime
  );

  function getTimeDifference(beginTime, endTime) {
    const start = new Date(beginTime);
    const end = new Date(endTime);

    const difference = Math.abs(end - start) / 1000;

    const minutes = Math.floor(difference / 60);
    const seconds = Math.floor(difference % 60);

    return { minutes, seconds };
  }

  const clickHistory = () => {
    navigate(`/history/${history.interviewHistoryId}`);
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <HistoryItemContainer onClick={clickHistory}>
      <DocumentIcon src="images/ic_document.svg" alt="document_icon" />
      <ContentContainer>
        <CompanyName>
          {history.interviewName}({history.company})
        </CompanyName>
        <AdditionalInfo>
          <InfoRow>
            <InfoIcon src="images/ic_clock.svg" alt="clock_icon" />
            <div>
              {minutes}분 {seconds}초
            </div>
          </InfoRow>
          <InfoRow>
            <InfoIcon src="images/ic_score.svg" alt="score_icon" />
            <div>{history.score} / 100</div>
          </InfoRow>
        </AdditionalInfo>
        <Comment>"{history.comment}"</Comment>
        <DateInfo>
          {history.beginTime === null
            ? "진행되지 않은 면접입니다."
            : history.beginTime.replace("T", " ")}
        </DateInfo>
      </ContentContainer>
    </HistoryItemContainer>
  );
};

export default InterviewHistoryItem;
