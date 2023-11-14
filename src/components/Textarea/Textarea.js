import React, { useState } from "react";
import { TextareaStyle, WrapperStyle, LabelStyle } from "./style";

export const TextareaColor = {
  GRAY: "#3D437104",
  WHITE: "#FFFFFF",
};

Object.freeze(TextareaColor);

const Textarea = ({
  type,
  label,
  value,
  onChange,
  isError,
  color,
  maxLength,
  readOnly,
}) => {
  const [currentValue, setCurrentValue] = useState(value || "");
  if (!readOnly) readOnly = false;

  const handleChange = (e) => {
    const inputValue = e.target.value.slice(0, maxLength);
    setCurrentValue(inputValue);

    if (onChange) {
      onChange(inputValue);
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
        readOnly={readOnly}
      />
    </WrapperStyle>
  );
};

export default Textarea;
