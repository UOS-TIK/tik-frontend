import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import Button, { ButtonFeature } from "../components/Button/Button";
import Input, { InputColor } from "../components/Input/Input";
import Textarea, { TextareaColor } from "../components/Textarea/Textarea";

const Resume = () => {
  const [addMode, setAddMode] = useState(false);

  function onClickAddButton() {
    setAddMode(!addMode);
  }

  return (
    <MainContainer>
      <Header />
      <MainBanner
        badgeText="모의면접 생성"
        badgeType="outlined"
        title="Part 1. 어떤 면접인지 입력해 주세요"
        description="이력서 작성 페이지를 통해 미리 작성할 수 있으며, 선택한 이력서를 바탕으로 질문이 생성됩니다."
        imageUrl="images/ic_resume.svg"
        bgColor="#3d4371"
      />
      <ContentContainer>
        <TitleWrapper>
          <InterviewSettingTitle>
            나의 이력서
            <RightArrow
              src="images/ic_right_arrow.svg"
              alt="right_arrow_icon"
            />
          </InterviewSettingTitle>
          <Button feature={ButtonFeature.FLEXIBLE} handler={onClickAddButton}>
            이력서 추가
          </Button>
        </TitleWrapper>
        <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
          <ListWrapper>
            <div style={{ backgroundColor: "gray" }}>목록 1</div>
            <div style={{ backgroundColor: "gray" }}>목록 2</div>
            <div style={{ backgroundColor: "gray" }}>목록 3</div>
          </ListWrapper>
          <WhiteBoxContainer>
            <Input label="이력서 이름" color={InputColor.GRAY} />
            <Textarea label="설명" color={TextareaColor.GRAY} />
          </WhiteBoxContainer>
        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default Resume;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  height: 100vh;
`;

const InterviewSettingTitle = styled.div`
  color: #1c1c1c;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const RightArrow = styled.img`
  width: 17px;
  margin-left: 4px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 57.5px 80px;
  height: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 400px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 400px;
`;

const WhiteBoxContainer = styled.div`
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;
