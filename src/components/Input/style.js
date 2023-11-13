import styled from "styled-components";

export const InputStyle = styled.input`
  width: calc(100% - 24px);
  height: 20px;
  background: ${(props) => `${props.color}`};
  border-radius: 10px;
  border: ${(props) => (props.isFocused ? "2px" : "1px")} solid
    ${(props) =>
      props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(61, 67, 113, 0.3)"};
  padding: 12px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -1px;

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(141, 153, 243, 0.6)"};
    outline-offset: -2px;
  }
`;

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelStyle = styled.span`
  color: rgba(28, 28, 28, 0.7);

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
`;
