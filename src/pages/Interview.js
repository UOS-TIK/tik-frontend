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
            <div style={{fontSize: "20px", fontWeight: "700"}}>Part 3. 면접이 진행 중이에요</div>
            <div>실제 면접 상황인 것처럼 면접에 임해보세요.</div>
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
      <div style={{height: "calc(100% - 140px)", border: "2px solid #FFF", backgroundColor: "rgba(255, 255, 255, 0.20)", padding: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "2px"}}>
        <div style={{display: "flex", justifyContent: "flex-start"}}>
          <div style={{padding: "8px 16px", backgroundColor: "#F9FAFB", borderRadius: "10px", color: "#000", fontSize: "14px" ,width: "fit-content"}}>면접관의 질문입니다.</div>
        </div>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <div style={{padding: "8px 16px", backgroundColor: "#8D99F3", borderRadius: "10px", color: "#FFF", fontSize: "14px" ,width: "fit-content"}}>제가 생각할 때는 </div>
        </div>
        <div style={{display: "flex", justifyContent: "flex-start"}}>
          <div style={{padding: "8px 16px", backgroundColor: "#F9FAFB", borderRadius: "10px", color: "#000", fontSize: "14px" ,width: "fit-content"}}>면접관의 질문입니다.</div>
        </div>
      </div>

        <div style={{display: "flex",justifyContent: "flex-end"}}>
           <div style={{width: "300px"}}>
            <Button
                feature={ButtonFeature.NONE}
                color={ButtonColor.BLUE}
                // handler={() => stopInterviewApi()}
              >대답할게요!</Button>
           </div>
          </div>
      </div>
    </div>
  );
};

export default Interview;