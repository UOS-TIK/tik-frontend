import React, { useState } from "react";
import { WrapperStyle, LabelStyle, GrayBoxContainer } from "./style";

const Content = ({ label, value, children }) => {
  return (
    <WrapperStyle>
      <LabelStyle>{label}</LabelStyle>
      <GrayBoxContainer>{children}</GrayBoxContainer>
    </WrapperStyle>
  );
};

export default Content;
