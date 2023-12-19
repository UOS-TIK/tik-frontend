import { useState } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Button, { ButtonFeature } from "../../components/Button/Button";
import {
  TitleWrapper,
  NoContentContainer,
  ProjectWrapperStyle,
  GrayBoxContainer,
  ProjectNameStyle,
  ProjectSummaryStyle,
  StackWrapper,
} from "./style";
import { WrapperStyle, LabelStyle } from "../../components/Input/style";
import ProjectForm from "./ProjectForm";
import StackChip from "../../components/StackChip/StackChip";

const ProjectView = ({ project, setProject, addMode }) => {
  const [projectAddMode, setProjectAddMode] = useState(false);

  function onClickAddButton() {
    setProjectAddMode(true);
  }

  function onClickProject(id) {
    if (addMode) {
      const result = window.confirm("해당 프로젝트를 삭제하시겠습니까?");
      if (result) {
        deleteProject(id);
      }
    }
  }

  function deleteProject(id) {
    const updatedProjects = project.filter((proj) => proj.id !== id);
    setProject(updatedProjects);
  }

  return (
    <WrapperStyle>
      <TitleWrapper>
        {addMode ? (
          <>
            <LabelStyle>
              사이드 프로젝트&nbsp;
              <div style={{ fontSize: "11px" }}>
                (프로젝트를 수정하시려면 삭제하고 다시 입력해주세요)
              </div>
            </LabelStyle>
            <Button feature={ButtonFeature.FLEXIBLE} handler={onClickAddButton}>
              사이드 프로젝트 추가
            </Button>
          </>
        ) : (
          <LabelStyle>사이드 프로젝트</LabelStyle>
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
              />
            </GrayBoxContainer>
          )}
          {project.map((project) => (
            <GrayBoxContainer
              key={project.id}
              onClick={() => onClickProject(project.id)}
            >
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
                      gap: "6px",
                      width: "auto",
                    }}
                  >
                    <ProjectNameStyle>{project.name}</ProjectNameStyle>
                    <ProjectSummaryStyle>{project.summary}</ProjectSummaryStyle>
                  </div>
                  <StackWrapper>
                    {project.techStack.map((stack) => (
                      <StackChip key={stack.id}>{stack.name}</StackChip>
                    ))}
                  </StackWrapper>
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

export default ProjectView;
