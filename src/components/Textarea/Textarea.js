import React, { useState } from "react";
import { TextareaStyle, WrapperStyle, LabelStyle } from "./style";

export const Color = {
  GRAY: "#3D437104",
  WHITE: "#FFFFFF",
};

Object.freeze(Color);

const Textarea = ({
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
      <TextareaStyle
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

export default Textarea;
