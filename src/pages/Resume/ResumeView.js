import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import ProjectView from "./ProjectView.js";
import { ButtonWrapper } from "./style";

const ResumeView = (props) => {
  const { selectedResumeId, setResumeList, setAddMode } = props;

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
      if (e.response.data.data) alert("[ResumeView]getResume");
    } finally {
      setLoading(false);
    }
  };

  const deleteResume = async () => {
    try {
      setLoading(true);
      const res = await api.patch(`/resume/disable/${selectedResumeId}`);
      if (res.status === 204) {
        setResumeList(res.data.data);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert("delete", e.response.data.data);
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
          <ButtonWrapper>
            <Button
              color={ButtonColor.GRAY}
              feature={ButtonFeature.LINE}
              handler={deleteResume}
            >
              삭제하기
            </Button>
            <Button
              color={ButtonColor.GRAY}
              feature={ButtonFeature.NONE}
              handler={() => setAddMode(true)}
            >
              수정하기
            </Button>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

export default ResumeView;
