import { InnerStyle, WrapperStyle, IconImage, Description } from "./style";

export const ImageTextColor = {
  BLUE: "#3D4371",
  WHITE: "#FFFFFF",
};

const ImageText = ({ imageUrl, color, children }) => {
  return (
    <InnerStyle>
      <WrapperStyle>
        <IconImage src={imageUrl} alt="IconImage" />
        <Description color={color}>{children}</Description>
      </WrapperStyle>
    </InnerStyle>
  );
};

export default ImageText;
