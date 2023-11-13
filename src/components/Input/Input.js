import React, { useState } from "react";
import { InputStyle, WrapperStyle, LabelStyle } from "./style";

export const InputColor = {
  GRAY: "#3D437104",
  WHITE: "#FFFFFF",
};

Object.freeze(InputColor);

const Input = ({
  type,
  label,
  value,
  onChangeHandler,
  isError,
  color,
  maxLength,
}) => {
  const [currentValue, setCurrentValue] = useState(value || "");

  const handleChange = (e) => {
    const inputValue = e.target.value.slice(0, maxLength);
    setCurrentValue(inputValue);

    if (onChangeHandler) {
      onChangeHandler(inputValue);
    }
  };
  return (
    <WrapperStyle>
      <LabelStyle>{label}</LabelStyle>
      <InputStyle
        type={type}
        label={label}
        value={currentValue}
        onChange={handleChange}
        isError={isError}
        color={color}
        maxLength={maxLength}
      />
    </WrapperStyle>
  );
};

export default Input;
