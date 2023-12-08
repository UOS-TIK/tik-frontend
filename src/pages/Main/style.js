import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

export const InterviewSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 148px;
`;

export const InterviewHistory = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
`;

export const HistorySectionTitle = styled.div`
  color: #1c1c1c;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const RightArrow = styled.img`
  width: 17px;
  margin-left: 4px;
`;

export const HistoryItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HistoryItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  border-radius: 20px;
  max-width: 320px;
  padding: 24px;
  gap: 8px;
`;

export const DocumentIcon = styled.img`
  width: 48px;
  align-self: flex-start;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CompanyName = styled.div`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 4px;
  color: #3d437166;
  font-size: 14px;
`;

export const InfoIcon = styled.img`
  width: 16px;
`;

export const Comment = styled.div`
  color: #3d4371b2;
  font-weight: 700;
`;

export const Skills = styled.div`
  display: flex;
  gap: 8px;
`;

export const SkillTag = styled.div`
  background-color: #f9fafb;
  padding: 4px 8px;
  border: 1px solid #0000001a;
  border-radius: 10px;
  color: #3d437199;
  font-weight: 700;
`;

export const DateInfo = styled.div`
  margin-top: 4px;
  color: #3d437180;
  text-align: right;
  font-size: 14px;
`;
