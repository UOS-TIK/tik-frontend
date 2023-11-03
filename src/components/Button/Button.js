import { ButtonStyle, ButtonFlexibleStyle } from "./style";
export const Feature = {
  NONE: 0,
  LINE: 1,
  FLEXIBLE: 2,
};

export const Color = {
  BLUE: "61, 67, 113",
  GRAY: "68, 68, 68",
  WHITE: "255, 255, 255",
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
