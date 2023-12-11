import React from "react";
import { WrapperStyle, LabelStyle, GrayBoxContainer } from "./style";

const Content = ({ label, children }) => {
  return (
    <WrapperStyle>
      <LabelStyle>{label}</LabelStyle>
      <GrayBoxContainer>{children}</GrayBoxContainer>
    </WrapperStyle>
  );
};

export default Content;
