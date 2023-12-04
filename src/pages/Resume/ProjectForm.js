import { useState } from "react";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import { TitleWrapper, NoContentContainer } from "./style";
import { WrapperStyle, LabelStyle } from "../../components/Input/style";

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

export default ProjectForm;
