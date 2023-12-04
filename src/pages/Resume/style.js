import styled from "styled-components";

export const NoContentContainer = styled.div`
  background: #fff;
  border: 1px solid rgba(61, 67, 113, 0.3);
  border-radius: 10px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.65px;
  padding: 10px 12px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

export const InterviewSettingTitle = styled.div`
  color: #1c1c1c;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const RightArrow = styled.img`
  width: 17px;
  margin-left: 4px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 57.5px 80px;
  height: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 400px;
`;

export const ResumeWrapper = styled.div`
  display: flex;
  width: calc(100% - 32px);
  padding: ${(props) => (props.selected === true ? `15px` : `16px`)};
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 20px;
  border: ${(props) =>
    props.selected === true
      ? `2px solid rgba(141, 153, 243, 0.80)`
      : `1px solid rgba(0, 0, 0, 0.1)`};
  background: #fff;
`;

export const ResumeTitle = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const ResumeIntroduction = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.65px;
`;

export const WhiteBoxContainer = styled.div`
  width: calc(100% - 400px - 80px - 64px);
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  min-height: 350px;
`;

export const GrayBoxContainer = styled.div`
  display: flex;
  width: calc(100% - 24px);
  padding: 12px;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid rgba(61, 67, 113, 0.3);
  background: rgba(61, 67, 113, 0.03);
  align-items: center;
`;

export const ProjectWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const ProjectNameStyle = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

export const ProjectSummaryStyle = styled.div`
  color: rgba(61, 67, 113, 0.5);
  font-size: 9px;
  font-weight: 400;
  letter-spacing: -0.1px;
`;
