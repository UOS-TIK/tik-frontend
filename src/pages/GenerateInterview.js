import { useEffect, useState } from "react";
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
import api from "../api/api";

const GenerateInterview = () => {
  const [resumes, setResumes] = useState([]);
  const [companyName, setCompanyName]  = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [jobDescription, setJobDescription] =  useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [resumeQuestion, setResumeQuestion] = useState("1");
  const [csQuestion, setCsQuestion] = useState("0");
  const navigate = useNavigate();

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleProjectChange = (event) => {
    setSelectedProject(parseInt(event.target.value, 10));
  };

  const handleResumeQuestionChange = (event) => {
    setResumeQuestion(event.target.value.slice(0, 1));
  };
  
  const handleCsQuestionChange = (event) => {
    setCsQuestion(event.target.value.slice(0, 1));
  };

  const handleMakeResumeBtnClick = () => {
    navigate("/resume");
  };

  const generateInterviewBtnhandler = () => {
    if (!companyName) {
      alert('회사 이름을 입력해주세요.');
      return;
    }
    if (!selectedJobType) {
      alert('직군을 선택해주세요.');
      return;
    }
    if (!jobDescription) {
      alert('모집 공고문을 입력해주세요.');
      return;
    }
    const totalQuestions = Number(resumeQuestion) + Number(csQuestion);
    if (totalQuestions < 1 || totalQuestions > 10) {
      alert("질문은 총 1개에서 10개까지 가능합니다.");
      return;
    }

    generateInterviewApi();
  };

  const generateInterviewApi = async () => {

    const data = {
      resumeId: selectedProject,
      company: companyName,
      interviewName: companyName,
      occupation: selectedJobType,
      jobDescription: jobDescription,
      options: {
        resumeQuestion: resumeQuestion,
        csQuestion: csQuestion
      }
    };
    try {
      const res = await api.post("/interview/init", data);
      console.log(res);
      if (res.status === 201) {
        alert("면접을 생성하였습니다. 면접 페이지로 이동합니다.");
        navigate("/interview", { state: { interviewId: res.data.data.interviewId } });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getResumeList = async () => {
      try {
        const res = await api.get('/resume');
        const resumeData = res.data.data;

        setResumes(resumeData);
        if(resumeData.length > 0) {
          setSelectedProject(resumeData[0].id);
        }

        
      } catch (e) {
        console.log(e);
      }
    };
    getResumeList();
  }, []);

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
            <div>
              {resumes.map((resume) => (
                <RadioWithExplain
                  key={resume.id}
                  name="resume"
                  value={resume.id}
                  explain={resume.introduction}
                  checked={selectedProject === resume.id}
                  onChange={handleProjectChange}
                >
                  {resume.name}
                </RadioWithExplain>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div>5. 면접 질문의 개수를 선택해주세요. (최대 합 10개 이내)</div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", marginLeft: "12px"}}>
              <div style={{fontWeight: "700", width: "132px"}}>이력서 기반 질문 개수</div>
              <input style={{width: "16px", padding: "2px"}} value={resumeQuestion} onChange={handleResumeQuestionChange}/>
              <div>개</div>
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", marginLeft: "12px"}}>
              <div style={{fontWeight: "700", width: "132px"}}>CS 기반 질문 개수</div>
              <input style={{width: "16px", padding: "2px"}} value={csQuestion} onChange={handleCsQuestionChange} />
              <div>개</div>
            </div>
          </div>
          <div style={{minWidth: "240px", display: "flex", margin: "auto"}}>
            <Button
              feature={ButtonFeature.NONE}
              color={ButtonColor.BLUE}
              handler={generateInterviewBtnhandler}
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
