import {
  InputStyle,
  LabelStyle,
  WrapperStyle,
  ExplanationStyle,
  TextWrapperStyle,
} from "./style";

const LoginInput = ({ type, label, name, value, explanation, onChange }) => {
  return (
    <WrapperStyle>
      <TextWrapperStyle>
        <LabelStyle>{label}</LabelStyle>
        <ExplanationStyle>{explanation}</ExplanationStyle>
      </TextWrapperStyle>
      <InputStyle type={type} name={name} value={value} onChange={onChange} />
    </WrapperStyle>
  );
};

export default LoginInput;
