import { useEffect, useState } from "react";
import api from "../../api/api";
import Input, { InputColor } from "../../components/Input/Input";
import Textarea, { TextareaColor } from "../../components/Textarea/Textarea";
import Button, {
  ButtonColor,
  ButtonFeature,
} from "../../components/Button/Button";
import { ButtonWrapper } from "./style";

const HistoryView = (props) => {
  const { selectedHistoryId, setHistoryList, setAddMode } = props;

  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedHistoryId !== 0) getHistory();
  }, [selectedHistoryId]);

  const getHistory = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `/history/view?interviewHistoryId=${selectedHistoryId}`
      );
      if (res.status === 200) {
        setName(res.data.data.name);
        setIntroduction(res.data.data.introduction);
        setProject(res.data.data.projects);
      }
    } catch (e) {
      console.log(e);
      if (e.response.data.data) alert("[HistoryView]getHistory");
    } finally {
      setLoading(false);
    }
  };

  const deleteHistory = async () => {
    try {
      setLoading(true);
      const res = await api.patch(`/history/disable/${selectedHistoryId}`);
      if (res.status === 204) {
        setHistoryList(res.data.data);
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
              handler={deleteHistory}
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

export default HistoryView;
