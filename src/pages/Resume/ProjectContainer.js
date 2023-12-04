import { useState } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import {
  TitleWrapper,
  NoContentContainer,
  ProjectWrapperStyle,
  GrayBoxContainer,
  ProjectNameStyle,
  ProjectSummaryStyle,
} from "./style";
import { WrapperStyle, LabelStyle } from "../../components/Input/style";
import ProjectForm from "./ProjectForm";

const ProjectContainer = (props) => {
  const { project, setProject, addMode, setModalOn } = props;

  const [projectAddMode, setProjectAddMode] = useState(false);

  function onClickAddButton() {
    setProjectAddMode(true);
  }

  return (
    <WrapperStyle>
      <TitleWrapper>
        <LabelStyle>사이드 프로젝트</LabelStyle>
        {addMode && (
          <Button feature={ButtonFeature.FLEXIBLE} handler={onClickAddButton}>
            사이드 프로젝트 추가
          </Button>
        )}
      </TitleWrapper>
      {project.length === 0 && !projectAddMode ? (
        <NoContentContainer>
          입력된 사이드 프로젝트가 없습니다.
        </NoContentContainer>
      ) : (
        <ProjectWrapperStyle>
          {projectAddMode && (
            <GrayBoxContainer>
              <ProjectForm
                setProjectAddMode={setProjectAddMode}
                project={project}
                setProject={setProject}
                setModalOn={setModalOn}
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

export default ProjectContainer;
