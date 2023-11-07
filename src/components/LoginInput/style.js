import styled from "styled-components";

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const LabelStyle = styled.span`
  color: #3d4371;

  font-family: NanumGothic;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  margin-left: 6px;
`;

export const InputStyle = styled.input`
  width: calc(100% - 12px);
  height: 20px;
  background: rgba(61, 67, 113, 0.15);
  border: none;
  border-radius: 10px;
  padding: 12px 0px 12px 12px;
  font-family: NanumGothic;
  color: #3d4371;
  font-size: 15px;

  &:focus {
    outline: none;
    border: none;
  }
`;
