import styled from "styled-components";

export const InputStyle = styled.input`
  width: calc(100% - 12px);
  height: 20px;
  background: ${(props) => `${props.color}`};
  border-radius: 10px;
  border: ${(props) => (props.isFocused ? "2px" : "1px")} solid
    ${(props) =>
      props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(61, 67, 113, 0.3)"};

  padding: 12px 0px 12px 12px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.8px;

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(141, 153, 243, 0.6)"};
    outline-offset: -2px;
  }

  &::placeholder {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.8px;
  }
`;

export const TextareaStyle = styled.textarea`
  width: calc(100% - 12px);
  height: 20px;
  background: ${(props) => `${props.color}`};
  border-radius: 10px;
  border: ${(props) => (props.isFocused ? "2px" : "1px")} solid
    ${(props) =>
      props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(61, 67, 113, 0.3)"};
  padding: 12px 0px 12px 12px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.8px;

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.isError ? "rgba(252, 49, 95, 0.50)" : "rgba(141, 153, 243, 0.6)"};
    outline-offset: -2px;
  }

  &::placeholder {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.8px;
  }
`;
