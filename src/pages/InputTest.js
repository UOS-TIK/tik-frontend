import { useState } from "react";
import styled from "styled-components";
import Input, { Color } from "../components/Input/Input";

const InputTest = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "500px",
        gap: "5px",
        padding: "10px",
        flexDirection: "column",
      }}
    >
      <Input label="test1" color={Color.GRAY} />
      <Input label="test1" color={Color.GRAY} textarea={true} />
      <Input label="test1" color={Color.GRAY} textarea={true} isError={true} />
      <div
        style={{
          backgroundColor: "#F9FAFB",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <Input label="test1" color={Color.WHITE} />
        <Input label="test1" color={Color.WHITE} textarea={true} />
        <Input
          label="test1"
          color={Color.WHITE}
          textarea={true}
          isError={true}
        />
      </div>
    </div>
  );
};

export default InputTest;
