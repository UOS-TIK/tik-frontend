import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import RadioButton from "../components/RadioButton/Radiobutton";
import RadioWithExplain from "../components/RadioWithExplain/RadioWithExplain";
import MainBanner from "../components/MainBanner/MainBanner";
import Input, { InputColor } from "../components/Input/Input";
import Textarea, { TextareaColor } from "../components/Textarea/Textarea";
import Button, { ButtonColor, ButtonFeature } from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Board from "../components/Board/Board";

const GenerateInterview = () => {
  const [companyName, setCompanyName]  = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [jobDescription, setJobDescription] =  useState("");
  const navigate = useNavigate();

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const [selectedProject, setSelectedProject] = useState("");
  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleMakeResumeBtnClick = () => {
    navigate("/resume");
  };

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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "50px 148px",
          fontSize: "14px"
        }}
      >
        <InterviewSettingTitle>
          면접 환경 설정
          <RightArrow src="images/ic_right_arrow.svg" alt="right_arrow_icon" />
        </InterviewSettingTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
            padding: "16px",
            border: "1px solid #0000001A",
            borderRadius: "20px",
            maxWidth: "680px",
            color: "#1C1C1CB2",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              gap: "8px",
            }}
          >
            <Input
              label="1. 회사 이름을 입력해주세요."
              color={InputColor.WHITE}
              value={companyName}
              onChange={setCompanyName}
            />
            <div
              style={{
                display: "flex",
                position: "absolute",
                whiteSpace: "nowrap",
                left: "732px",
                gap: "6px",
              }}
            >
              <img
                src="/images/ic_additional_info.svg"
                alt="additional_info_icon"
                style={{ width: "18px" }}
              />
              회사 이름은 면접 이름으로 저장됩니다.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px"}}>
            <div>2. 직군을 선택해주세요.</div>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <RadioButton
                name="jobType"
                value="프론트엔드"
                checked={selectedJobType === "프론트엔드"}
                onChange={handleJobTypeChange}
              >
                프론트엔드
              </RadioButton>
              <RadioButton
                name="jobType"
                value="서버/백엔드"
                checked={selectedJobType === "서버/백엔드"}
                onChange={handleJobTypeChange}
              >
                서버/백엔드
              </RadioButton>
              <RadioButton
                name="jobType"
                value="웹 풀스택"
                checked={selectedJobType === "웹 풀스택"}
                onChange={handleJobTypeChange}
              >
                웹 풀스택
              </RadioButton>
              <RadioButton
                name="jobType"
                value="iOS"
                checked={selectedJobType === "iOS"}
                onChange={handleJobTypeChange}
              >
                iOS
              </RadioButton>
              <RadioButton
                name="jobType"
                value="안드로이드"
                checked={selectedJobType === "안드로이드"}
                onChange={handleJobTypeChange}
              >
                안드로이드
              </RadioButton>
              <RadioButton
                name="jobType"
                value="DBA"
                checked={selectedJobType === "DBA"}
                onChange={handleJobTypeChange}
              >
                DBA
              </RadioButton>
            </div>
          </div>
          <Textarea
            label="3. 모집 공고문을 입력해주세요. (공백 포함 500자 이내)"
            color={TextareaColor.WHITE}
            value={jobDescription}
            maxLength={500}
            onChange={setJobDescription}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div>4. 제출할 이력서를 선택해주세요.</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                whiteSpace: "nowrap",
                left: "897px",
                gap: "6px",
              }}
            >
              <div style={{display: "flex",gap: "6px"}}>
                <img
                  src="/images/ic_additional_info.svg"
                  alt="additional_info_icon"
                  style={{ width: "18px" }}
                />
                새로운 이력서가 필요하세요?
              </div>
              <Board
                buttonText="이력서 작성하러 가기"
                buttonHandler={handleMakeResumeBtnClick}
              >
                이력서를 분야별로 정리하여, <br />
                맞춤형 이력서를 제시해보세요!
              </Board>
            </div>
            <div style={{ height: "80px" }}>
              <RadioWithExplain
                name="project"
                value="미스터대박"
                explain={
                  "학교 소프트웨어 공학 수업에서 진행했던 프로젝트입니다."
                }
                checked={selectedProject === "미스터대박"}
                onChange={handleProjectChange}
              >
                미스터대박
              </RadioWithExplain>
              <RadioWithExplain
                name="project"
                value="uostime"
                explain={"서울 시립대 학생들을 위한 시간표 제공 서비스입니다."}
                checked={selectedProject === "uostime"}
                onChange={handleProjectChange}
              >
                uostime
              </RadioWithExplain>
              <RadioWithExplain
                name="project"
                value="uspray"
                explain={"기독교 청년들을 위한 기도 수첩 어플입니다."}
                checked={selectedProject === "uspray"}
                onChange={handleProjectChange}
              >
                uspray
              </RadioWithExplain>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>5. 면접 질문의 개수를 선택해주세요. (최대 합 10개 이내)</div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", marginLeft: "12px"}}>
              <div style={{fontWeight: "700", width: "132px"}}>이력서 기반 질문 개수</div>
              <input style={{width: "16px", padding: "2px"}} />
              <div>개</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", marginLeft: "12px"}}>
              <div style={{fontWeight: "700", width: "132px"}}>CS 기반 질문 개수</div>
              <input style={{width: "16px", padding: "2px"}} />
              <div>개</div>
            </div>
          </div>
          <div style={{minWidth: "240px", display: "flex", margin: "auto"}}>
            <Button
              feature={ButtonFeature.NONE}
              color={ButtonColor.BLUE}
              // handler={}
            >면접 생성하기</Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default GenerateInterview;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
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
