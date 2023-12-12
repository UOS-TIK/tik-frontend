
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api/api';
import Button, { ButtonColor, ButtonFeature } from '../components/Button/Button';
import Interview from './Interview';

const StartInterview = () => {
  const location = useLocation();
  const interviewId = location.state.interviewId;
  const navigate = useNavigate();
  const [startButtonClicked, setStartButtonClicked] = useState(false);

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

  const startInterview = () => {
    setStartButtonClicked(true);
  };

  return (
    <>
    {startButtonClicked ? <Interview startButtonClicked={startButtonClicked} /> :
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
          <div style={{display: "flex", flexDirection: "column", alignItems:"center", height:"100%", justifyContent: "center", gap: "12px"}}>
            <img
              src="/images/ic_robot.svg"
              alt="robot_icon"
            />
            <div style={{fontSize: "18px", textAlign: "center"}}>AI를 기반으로 면접이 생성되었습니다. <br /> 면접을 시작하시겠습니까?</div>
            <div style={{width: "300px"}}>
              <Button
                feature={ButtonFeature.NONE}
                color={ButtonColor.BLUE}
                handler={() => startInterview()}
              >면접 시작하기</Button>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default StartInterview;