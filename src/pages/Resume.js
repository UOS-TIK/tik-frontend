import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../components/Button/Button";
import Input, { InputColor } from "../components/Input/Input";
import { WrapperStyle, LabelStyle } from "../components/Input/style";
import Textarea, { TextareaColor } from "../components/Textarea/Textarea";
import ImageText, { ImageTextColor } from "../components/ImageText/ImageText";

const ProjectForm = (props) => {
  const { setAddMode, project, setProject } = props;

  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState([]);

  function onClickCloseButton() {
    setAddMode(false);
  }

  function addProject() {
    const newId = project.length + 1;

    const newProject = {
      id: newId,
      name: name,
      summary: summary,
      description: description,
      techStack: techStack,
    };

    setProject([...project, newProject]);
    setAddMode(false);
  }

  return (
    <>
      <TitleWrapper>
        <LabelStyle>새 프로젝트 입력</LabelStyle>
        <Button feature={ButtonFeature.FLEXIBLE} handler={onClickCloseButton}>
          닫기
        </Button>
      </TitleWrapper>
      <Input
        label="1. 프로젝트 이름을 입력해주세요"
        color={InputColor.WHITE}
        value={name}
        onChange={setName}
      />
      <Input
        label="2. 프로젝트 한 줄 설명을 입력해주세요"
        color={InputColor.WHITE}
        value={summary}
        onChange={setSummary}
      />
      <WrapperStyle>
        <div
          style={{
            display: "flex",
            gap: "12px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <LabelStyle>3. 사용 스택을 선택해주세요</LabelStyle>
          <Button feature={ButtonFeature.FLEXIBLE}>스택 검색</Button>
        </div>
        <NoContentContainer>선택한 스택이 없습니다.</NoContentContainer>
      </WrapperStyle>
      <Textarea
        label="4. 상세 업무 및 성과를 입력해주세요"
        color={TextareaColor.WHITE}
        value={description}
        onChange={setDescription}
      />
      <div style={{ width: "300px" }}>
        <Button
          feature={ButtonFeature.NONE}
          color={ButtonColor.BLUE}
          handler={addProject}
        >
          프로젝트 추가하기
        </Button>
      </div>
    </>
  );
};

const ProjectContainer = (props) => {
  const { project, setProject } = props;

  const [addMode, setAddMode] = useState(false);

  function onClickAddButton() {
    setAddMode(true);
  }

  return (
    <WrapperStyle>
      <TitleWrapper>
        <LabelStyle>사이드 프로젝트</LabelStyle>
        <Button feature={ButtonFeature.FLEXIBLE} handler={onClickAddButton}>
          사이드 프로젝트 추가
        </Button>
      </TitleWrapper>
      {project.length === 0 && !addMode ? (
        <NoContentContainer>
          입력된 사이드 프로젝트가 없습니다.
        </NoContentContainer>
      ) : (
        <ProjectWrapperStyle>
          {addMode && (
            <GrayBoxContainer>
              <ProjectForm
                setAddMode={setAddMode}
                project={project}
                setProject={setProject}
              />
            </GrayBoxContainer>
          )}
          {project.map((project) => (
            <GrayBoxContainer key={project.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <ProjectNameStyle>{project.name}</ProjectNameStyle>
                    <ProjectSummaryStyle>{project.summary}</ProjectSummaryStyle>
                  </div>
                  <div> 스택 두는 곳</div>
                </div>
                <Textarea
                  value={project.description}
                  readOnly={true}
                ></Textarea>
              </div>
            </GrayBoxContainer>
          ))}
        </ProjectWrapperStyle>
      )}
    </WrapperStyle>
  );
};

const ResumeForm = (props) => {
  const { setResumeList } = props;

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [project, setProject] = useState([]);

  useEffect(() => {
    console.log("Project", project);
  }, [project]);

  const addResume = async () => {
    const data = {
      name: name,
      introduction: introduction,
      project: project,
    };
    try {
      const res = await axios.post("/resume", data);
      console.log(res);
      if (res.status === 201) {
        alert("이력서 추가 성공");
        setResumeList(res.data.data);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <Input
        label="이력서 이름"
        color={InputColor.GRAY}
        value={name}
        onChange={setName}
      />
      <ProjectContainer setProject={setProject} project={project} />
      <Textarea
        label="설명"
        color={TextareaColor.GRAY}
        value={introduction}
        onChange={setIntroduction}
      />
      <div style={{ width: "300px" }}>
        <Button
          feature={ButtonFeature.NONE}
          color={ButtonColor.GRAY}
          handler={addResume}
        >
          이력서 추가하기
        </Button>
      </div>
    </>
  );
};

const Resume = () => {
  const [addMode, setAddMode] = useState(false);

  const [resumeList, setResumeList] = useState([]);

  function onClickAddButton() {
    setAddMode(true);
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
        <div style={{ width: "400px", marginBottom: "20px" }}>
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
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
          <ListWrapper></ListWrapper>
          <WhiteBoxContainer>
            {resumeList.length === 0 && !addMode ? (
              <ImageText
                imageUrl="images/ic_resume.svg"
                color={ImageTextColor.BLUE}
              >
                조회할 이력서가 없습니다.
                <br />
                이력서를 추가해주세요.
              </ImageText>
            ) : (
              <ResumeForm addMode={addMode} setResumeList={setResumeList} />
            )}
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
`;

const InterviewSettingTitle = styled.div`
  color: #1c1c1c;
  font-weight: 700;
  font-size: 20px;
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
  width: 100%;
  align-items: center;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 400px;
`;

const WhiteBoxContainer = styled.div`
  width: calc(100% - 400px - 80px - 64px);
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  min-height: 350px;
`;

const GrayBoxContainer = styled.div`
  display: flex;
  width: calc(100% - 24px);
  padding: 12px;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid rgba(61, 67, 113, 0.3);
  background: rgba(61, 67, 113, 0.03);
  align-items: center;
`;

const NoContentContainer = styled.div`
  background: #fff;
  border: 1px solid rgba(61, 67, 113, 0.3);
  border-radius: 10px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.65px;
  padding: 10px 12px;
`;

const ProjectWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const ProjectNameStyle = styled.div`
  color: rgba(28, 28, 28, 0.7);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

const ProjectSummaryStyle = styled.div`
  color: rgba(61, 67, 113, 0.5);
  font-size: 9px;
  font-weight: 400;
  letter-spacing: -0.1px;
`;
