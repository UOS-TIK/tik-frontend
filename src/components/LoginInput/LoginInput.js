import {
  InputStyle,
  LabelStyle,
  WrapperStyle,
  ExplanationStyle,
  TextWrapperStyle,
} from "./style";

const LoginInput = ({ type, label, value, explanation, onChangeHandler }) => {
  return (
    <WrapperStyle>
      <TextWrapperStyle>
        <LabelStyle>{label}</LabelStyle>
        <ExplanationStyle>{explanation}</ExplanationStyle>
      </TextWrapperStyle>
      <InputStyle type={type} value={value} onChange={onChangeHandler} />
    </WrapperStyle>
  );
};

export default LoginInput;
