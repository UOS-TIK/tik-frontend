import { InputStyle, TextareaStyle, WrapperStyle, LabelStyle } from "./style";

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

  return (
    <WrapperStyle>
      <LabelStyle>{label}</LabelStyle>
      {textarea ? (
        <TextareaStyle
          type={type}
          label={label}
          value={value}
          onChange={onChangeHandler}
          isError={isError}
          color={color}
        />
      ) : (
        <InputStyle
          type={type}
          label={label}
          value={value}
          onChange={onChangeHandler}
          isError={isError}
          color={color}
        />
      )}
    </WrapperStyle>
  );
};

export default Input;
