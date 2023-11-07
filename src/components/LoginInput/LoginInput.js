import { useState } from "react";
import { InputStyle, LabelStyle, WrapperStyle } from "./style";

const LoginInput = ({ type, label, value, onChangeHandler }) => {
  return (
    <WrapperStyle>
      <LabelStyle>{label}</LabelStyle>
      <InputStyle type={type} value={value} onChange={onChangeHandler} />
    </WrapperStyle>
  );
};

export default LoginInput;
