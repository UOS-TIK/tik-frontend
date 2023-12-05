import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";
import Button, { ButtonColor, ButtonFeature } from "../components/Button/Button";

const Interview = () => {
  const location = useLocation();
  const interviewId = location.state.interviewId;
  const navigate = useNavigate();

  const stopInterviewApi = async() => {
    try {
      const res = await api.delete(`/interview/abort/${interviewId}`);
      if (res.status === 204) {
        alert("면접을 중단하였습니다. 메인 페이지로 이동합니다.");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "column",width: "100vw", height: "100vh", backgroundColor: "#3D4371", color: "#FFF", padding: "70px 160px", boxSizing: "border-box", gap: "24px"}}>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px"}}>
        <div style={{color: "#FFFFFFCC", border: "1px solid #FFFFFFCC", width: "fit-content", padding: "6px 10px", borderRadius: "7px"}}>면접 맞춤 진행</div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
            <div style={{fontSize: "20px", fontWeight: "700"}}>Part 2. 면접을 만들었어요</div>
            <div>입력한 직군 정보와 이력서를 바탕으로 면접 질문을 생성했습니다.</div>
          </div>
          <div style={{width: "300px"}}>
            <Button
              feature={ButtonFeature.LINE}
              color={ButtonColor.WHITE}
              handler={() => stopInterviewApi()}
            >면접 중단하기</Button>
          </div>
        </div>
      </div>
      <div style={{height: "calc(100% - 140px)", border: "2px solid #FFF", backgroundColor: "rgba(255, 255, 255, 0.10)"}}>
        <div>인터뷰 아이디: {interviewId}</div>
      </div>
    </div>
  );
};

export default Interview;