import { ButtonStyle, ButtonFlexibleStyle } from "./style";
export const Feature = {
  NONE: 0,
  LINE: 1,
  FLEXIBLE: 2,
};

export const Color = {
  BLUE: "#3D4371",
  GRAY: "#444444",
  WHITE: "#FFFFFF",
};

Object.freeze(Feature);
Object.freeze(Color);

const Button = ({ feature, color, handler, children }) => {
  return feature === Feature.FLEXIBLE ? (
    <ButtonFlexibleStyle feature={feature} color={color} onClick={handler}>
      {children}
    </ButtonFlexibleStyle>
  ) : (
    <ButtonStyle feature={feature} color={color} onClick={handler}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
