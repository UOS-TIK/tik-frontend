import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import ProjectContainer from "./ProjectContainer";

const ResumeForm = (props) => {
  const { addMode, setResumeList, selectedResumeId } = props;

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [project, setProject] = useState([]);

  useEffect(() => {
    console.log("Project", project);
  }, [project]);

  useEffect(() => {
    getResume();
  }, [selectedResumeId]);

  const getResume = async () => {
    try {
      const res = await api.get(`/resume/detail?resumeId=${selectedResumeId}`);
      if (res.status === 200) {
        setName(res.data.data.name);
        setIntroduction(res.data.data.introduction);
        setProject(res.data.data.projects);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert(e.response.data.data);
    }
  };

  const addResume = async () => {
    const data = {
      name: name,
      introduction: introduction,
      projects: project,
    };
    try {
      console.log(data);
      const res = await api.post("/resume", data);
      console.log(res);
      if (res.status === 201) {
        alert("이력서 추가 성공");
        setResumeList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert(e.response.data.data);
    }
  };

  return (
    <>
      <Input
        label="이력서 이름"
        color={InputColor.GRAY}
        value={name}
        onChange={addMode ? setName : undefined}
        readOnly={!addMode}
      />
      <ProjectContainer
        setProject={setProject}
        project={project}
        addMode={addMode}
      />
      <Textarea
        label="설명"
        color={TextareaColor.GRAY}
        value={introduction}
        onChange={addMode ? setIntroduction : undefined}
        readOnly={!addMode}
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

export default ResumeForm;
