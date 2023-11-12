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
      <Input label="1. 이력서 이름을 입력해주세요" color={Color.GRAY} />
      <Input
        label="4. 상세 업무 및 성과를 입력해주세요"
        color={Color.GRAY}
        textarea={true}
      />
      <Input
        label="에러났을 때 테스트"
        color={Color.GRAY}
        textarea={true}
        isError={true}
      />
      <div
        style={{
          backgroundColor: "#F9FAFB",
          gap: "5px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <Input label="1. 이력서 이름을 입력해주세요" color={Color.WHITE} />
        <Input
          label="4. 상세 업무 및 성과를 입력해주세요"
          color={Color.WHITE}
          textarea={true}
        />
        <Input
          label="에러났을 때 테스트"
          color={Color.WHITE}
          textarea={true}
          isError={true}
        />
      </div>
    </div>
  );
};

export default InputTest;
