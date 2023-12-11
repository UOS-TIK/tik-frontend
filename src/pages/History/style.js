import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

export const HistorySettingTitle = styled.div`
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
  margin: 50px 148px;
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
  gap: 12px;
  width: 400px;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 4px;

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
    height: 1px; /* 버튼의 높이 조절 */
    opacity: 100%;
  }
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: ${(props) =>
    props.selected === true
      ? `2px solid rgba(141, 153, 243, 0.80)`
      : `1px solid rgba(0, 0, 0, 0.1)`};
  background: #fff;
  padding: ${(props) =>
    props.selected === true ? `0px 15px 0px 19px` : `0px 16px 0px 20px`};
  gap: 16px;
`;
export const HistoryContainerImage = styled.img`
  width: 22px;
  align-self: flex-start;
  heigth: ${(props) => (props.selected === true ? `43px` : `44px`)};
`;
export const HistoryTextWrapper = styled.div`
  display: flex;
  padding: ${(props) => (props.selected === true ? `15px 0px` : `16px 0px`)};
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const HistoryTitle = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const HistoryIntroduction = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.65px;
`;

export const HistoryDeleteImage = styled.img`
  width: 21px;
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
  height: fit-content;
`;

export const HistoryTextStyle = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;

export const LabelStyle = styled.span`
  color: rgba(28, 28, 28, 0.7);

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const MainLabelStyle = styled.span`
  font-weight: 700;
`;

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const GrayBoxContainer = styled.div`
  display: flex;
  width: calc(100% - 24px);
  padding: 12px;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid rgba(61, 67, 113, 0.3);
  background: rgba(61, 67, 113, 0.03);
  align-items: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ModalScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-right: 4px;
  width: 100%;
  max-height: 500px;
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
    height: 1px; /* 버튼의 높이 조절 */
    opacity: 100%;
  }
`;

export const HistoryViewFeedBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const DialogWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  flex-direction: column;
`;

export const InterviewQuestion = styled.div`
  padding: 8px 16px;
  background-color: #f9fafb;
  border-radius: 10px;
  color: #000;
  font-size: 14px;
  width: fit-content;
  line-height: 24px;
`;

export const InterviewAnswer = styled.div`
  padding: 8px 16px;
  background-color: #8d99f3;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

export const Line = styled.hr`
  align-self: stretch;
  height: 1px;
  background-color: #fff;
  width: 100%;
  border: none;
`;

export const DialogFeedback = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  flex-direction: row;
`;

export const DialogScore = styled.div`
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.7px;
`;
