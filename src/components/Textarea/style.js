import styled from "styled-components";

export const TextareaStyle = styled.textarea`
  width: calc(100% - 24px);
  height: 130px;
  background: ${(props) => `${props.color}`};
  border-radius: 10px;
  border: ${(props) => (props.isFocused ? "2px" : "1px")} solid
    ${(props) =>
      props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(61, 67, 113, 0.3)"};
  padding: 10px 12px;
  color: rgba(28, 28, 28, 0.7);
  font-family: NanumGothic;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.7px;
  resize: none;

  &:focus {
    outline: ${(props) =>
      props.readOnly ? "none" : "2px solid rgba(141, 153, 243, 0.6)"};
    outline-offset: -2px;
  }

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

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LabelStyle = styled.span`
  color: rgba(28, 28, 28, 0.7);

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;
