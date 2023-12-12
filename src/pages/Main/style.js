import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  min-height: 100vh;
`;

export const InterviewSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 148px;
  gap: 1rem;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export const HistoryItemContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border: 1px solid #0000001a;
  border-radius: 20px;
  max-width: 320px;
  padding: 24px;
  gap: 8px;
  cursor: pointer;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;
`;

export const CompanyName = styled.div`
  margin-top: 8px;
  color: #1c1c1c;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 4px;
  font-size: 14px;
  color: rgba(61, 67, 113, 0.4);
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.7px;
`;

export const InfoIcon = styled.img`
  width: 16px;
`;

export const Comment = styled.div`
  font-weight: 500;
  color: rgba(61, 67, 113, 0.7);
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.75px;
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
  text-align: right;
  color: rgba(61, 67, 113, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;
