import { InputStyle, TextareaStyle } from "./style";

export const Color = {
  GRAY: "#3D437104",
  WHITE: "#FFFFFF",
};

Object.freeze(Color);

const Input = ({
  type,
  label,
  value,
  onChangeHandler,
  isError,
  textarea,
  color,
}) => {
  if (!textarea) textarea = false;

  return textarea ? (
    <TextareaStyle
      type={type}
      label={label}
      value={value}
      onChange={onChangeHandler}
      isError={isError}
      color={color}
      placeholder={label}
    />
  ) : (
    <InputStyle
      type={type}
      label={label}
      value={value}
      onChange={onChangeHandler}
      isError={isError}
      color={color}
      placeholder={label}
    />
  );
};

export default Input;
