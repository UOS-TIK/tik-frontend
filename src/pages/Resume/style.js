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
  padding-left: 4px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

export const ProjectSummaryStyle = styled.div`
  padding-left: 4px;
  color: rgba(61, 67, 113, 0.5);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: -0.1px;
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 416px;
  padding: 24px 24px 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 20px;
  border: 3px solid rgba(68, 68, 68, 0.5);
  background: #f9fafb;
`;

export const ModalText = styled.div`
  color: rgba(28, 28, 28, 0.7);

  font-family: NanumGothic;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const StackBox = styled.div`
  display: flex;
  width: 368px;
  height: 128px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid rgba(61, 67, 113, 0.3);
  background: #fff;
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤 바 색상 */
    border-radius: 10px; /* 스크롤 바 모서리 둥글게 만들기 */
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* 스크롤 바 트랙 배경색 */
    border-radius: 10px; /* 스크롤 바 트랙 모서리 둥글게 만들기 */
  }

  &::-webkit-scrollbar-button {
    height: 10px; /* 버튼의 높이 조절 */
    opacity: 100%;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid rgba(61, 67, 113, 0.3);
  background: #fff;
`;

export const StackWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
