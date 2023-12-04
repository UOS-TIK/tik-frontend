import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import ProjectContainer from "./ProjectContainer";

const ResumeContainer = (props) => {
  const { selectedResumeId } = props;

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getResume();
  }, [selectedResumeId]);

  const getResume = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/resume/detail?resumeId=${selectedResumeId}`);
      if (res.status === 200) {
        setName(res.data.data.name);
        setIntroduction(res.data.data.introduction);
        setProject(res.data.data.projects);
        console.log(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert(e.response.data.data);
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
          <ProjectContainer
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

export default ResumeContainer;
