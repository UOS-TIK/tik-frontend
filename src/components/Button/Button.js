import { ButtonStyle, ButtonFlexibleStyle } from "./style";
export const ButtonFeature = {
  NONE: 0,
  LINE: 1,
  FLEXIBLE: 2,
};

export const ButtonColor = {
  BLUE: "#3D4371",
  GRAY: "#444444",
  WHITE: "#FFFFFF",
};

Object.freeze(ButtonFeature);
Object.freeze(ButtonColor);

const Button = ({ feature, color, disabled, handler, children }) => {
  return feature === ButtonFeature.FLEXIBLE ? (
    <ButtonFlexibleStyle disabled={disabled} feature={feature} onClick={handler}>
      {children}
    </ButtonFlexibleStyle>
  ) : (
    <ButtonStyle disabled={disabled} feature={feature} color={color} onClick={handler}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
