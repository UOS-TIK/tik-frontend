import { useState } from "react";
import styled from "styled-components";
import Input, { Color } from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";

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
      <Input
        label="1. 이력서 이름을 입력해주세요(5자 제한)"
        color={Color.GRAY}
        maxLength="5"
      />
      <Textarea
        label="4. 상세 업무 및 성과를 입력해주세요"
        color={Color.GRAY}
      />
      <Textarea
        label="에러났을 때 테스트(5자 제한)"
        color={Color.GRAY}
        isError={true}
        maxLength="5"
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
        <Textarea
          label="4. 상세 업무 및 성과를 입력해주세요"
          color={Color.WHITE}
        />
        <Textarea
          label="에러났을 때 테스트"
          color={Color.WHITE}
          isError={true}
        />
      </div>
    </div>
  );
};

export default InputTest;
