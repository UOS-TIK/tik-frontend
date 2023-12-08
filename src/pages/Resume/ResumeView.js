import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea from "../../components/Textarea/Textarea";
import ProjectView from "./ProjectView.js";

const ResumeView = ({ selectedResumeId, setResumeList, setAddMode }) => {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedResumeId !== 0) getResume();
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
      if (e.response.data.data) console.log("[ResumeView]getResume");
    } finally {
      setLoading(false);
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
            readOnly
          />
          <ProjectView
            setProject={setProject}
            project={project}
            addMode={false}
          />
          <Textarea
            label="설명"
            color={InputColor.GRAY}
            value={introduction}
            readOnly
          />
        </>
      )}
    </>
  );
};

export default ResumeView;
