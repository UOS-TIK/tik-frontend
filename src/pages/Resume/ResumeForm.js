import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import ProjectView from "./ProjectView.js";

const ResumeForm = (props) => {
  const { setResumeList, selectedResumeId, setAddMode } = props;

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  const addResume = async () => {
    if (name === "") {
      alert("이력서 이름을 입력해주세요.");
      return;
    }
    if (project.length === 0) {
      alert("프로젝트를 한 개 이상 입력해주세요.");
      return;
    }
    if (introduction === "") {
      alert("설명을 선택해주세요.");
      return;
    }

    function transformTechStack(projects) {
      return projects.map((project) => ({
        ...project,
        techStack: project.techStack.map((stack) => stack.id),
      }));
    }

    const data = {
      name: name,
      introduction: introduction,
      projects: transformTechStack(project),
    };

    try {
      console.log(data);
      const res = await api.post("/resume", data);
      if (res.status === 201) {
        alert("이력서 추가 성공");
        setAddMode(false);
        setResumeList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert("[ResumeForm]addResume");
    }
  };

  useEffect(() => {
    if (selectedResumeId === 0) {
      setName("");
      setIntroduction("");
      setProject([]);
    } else {
      getResume();
    }
  }, [selectedResumeId]);

  const getResume = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/resume/detail?resumeId=${selectedResumeId}`);
      if (res.status === 200) {
        setName(res.data.data.name);
        setIntroduction(res.data.data.introduction);
        setProject(res.data.data.projects);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) console.log("[ResumeForm]getResume");
    } finally {
      setLoading(false);
    }
  };

  const modifyResume = async () => {
    if (name === "") {
      alert("이력서 이름을 입력해주세요.");
      return;
    }
    if (project.length === 0) {
      alert("프로젝트를 한 개 이상 입력해주세요.");
      return;
    }
    if (introduction === "") {
      alert("설명을 선택해주세요.");
      return;
    }

    function transformTechStack(projects) {
      return projects.map((project) => ({
        ...project,
        techStack: project.techStack.map((stack) => stack.id),
      }));
    }

    const data = {
      resumeId: selectedResumeId,
      name: name,
      introduction: introduction,
      projects: transformTechStack(project),
    };

    try {
      console.log(data);
      const res = await api.put("/resume", data);
      if (res.status === 200) {
        alert("이력서 수정 성공");
        setAddMode(false);
        setResumeList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert("modifyResume", e.response.data.data);
    }
  };

  return (
    <>
      {loading ? (
        <span>로딩중</span>
      ) : (
        <>
          <Input
            label="이력서 이름"
            color={InputColor.GRAY}
            value={name}
            onChange={setName}
          />
          <ProjectView
            setProject={setProject}
            project={project}
            addMode={true}
          />
          <Textarea
            label="설명"
            color={TextareaColor.GRAY}
            value={introduction}
            onChange={setIntroduction}
          />
          <div style={{ width: "300px" }}>
            {selectedResumeId !== 0 ? (
              <Button
                feature={ButtonFeature.NONE}
                color={ButtonColor.GRAY}
                handler={modifyResume}
              >
                이력서 수정 완료하기
              </Button>
            ) : (
              <Button
                feature={ButtonFeature.NONE}
                color={ButtonColor.GRAY}
                handler={addResume}
              >
                이력서 추가하기
              </Button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ResumeForm;
