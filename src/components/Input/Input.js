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
  onChange,
  isError,
  color,
  maxLength,
  readOnly: readOnlyProp,
}) => {
  const [currentValue, setCurrentValue] = useState(value || "");
  if (!maxLength) maxLength = 100;
  const [readOnly, setReadOnly] = useState(readOnlyProp || false);

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
      <InputStyle
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

export default Input;
