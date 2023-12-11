import styled from 'styled-components';
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/api";
import Button, { ButtonColor, ButtonFeature } from "../components/Button/Button";
import React, { useCallback, useEffect, useRef, useState } from 'react';


const Interview = () => {
  const location = useLocation();
  const interviewId = location.state.interviewId;
  const navigate = useNavigate();
  const [buttonState, setButtonState] = useState("대답할게요!");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [status, setStatus] = useState('ready');
  const [interviewItems, setInterviewItems] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const htmlAudioRef = useRef(null);

  const scrollableAreaRef = useRef(null);

  useEffect(() => {
    if (scrollableAreaRef.current) {
      scrollableAreaRef.current.scrollTop = scrollableAreaRef.current.scrollHeight;
    }
  }, [interviewItems])

  useEffect(() => {
    let isMounted = true;
  
    const getInitialQuestion = async () => {
      const initialQuestion = '네 잘 부탁드립니다.';
      try {
        const res = await api.post('/interview/answer', {
          interviewId: interviewId,
          message: initialQuestion,
        });
  
        if (isMounted) {
          setIsButtonDisabled(false);
          console.log(res.data.data.reply);
          setInterviewItems(prevItems => {
            if (prevItems.length === 0) {
              return [{ question: res.data.data.reply, answer: '' }];
            }
            return prevItems;
          });
          
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    if (interviewItems.length === 0) {
      getInitialQuestion();
    }
  
    return () => {
      isMounted = false;
    };
  }, [interviewItems, interviewId]);

  const startRecording = useCallback(async () => {
    setStatus('recording');

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);

    mediaRecorder.start(100);

    mediaRecorderRef.current = mediaRecorder;
  }, []);

  const stopRecording = useCallback(async () => {
    setStatus('processing');
    
    const mediaRecorder = mediaRecorderRef.current;
    if (!mediaRecorder) {
      return null;
    }

    mediaRecorder.stop();
    mediaRecorder.stream.getTracks().forEach((track) => track.stop());

    const formData = new FormData();
    formData.append('file', new Blob(audioChunksRef.current, { type: 'audio/mp3' }));
    formData.append('model', 'whisper-1');

    const sttRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: formData,
    }).then((data) => data.json());

    const newAnswer = { question: '', answer: sttRes.text }
    setInterviewItems(interviewItems => [...interviewItems, newAnswer]);

    const llmRes = await api.post('/interview/answer', {
      interviewId: interviewId,
      message: sttRes.text,
    });

    const ttsRes = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'tts-1',
        voice: 'onyx',
        input: llmRes.data.data.reply,
      }),
    }).then((data) => data.blob());

    const audio = new Audio();
    audio.src = URL.createObjectURL(ttsRes);

    audio.addEventListener('ended', () => {
      if (llmRes.data.data.isFinished) {
        alert("면접이 모두 종료되었습니다. 메인 화면으로 이동합니다.");
        navigate("/");
      }
    });
    
    audio.play();

    mediaRecorderRef.current = null;
    audioChunksRef.current = [];
    htmlAudioRef.current = audio;
    setInterviewItems(interviewItems => [...interviewItems, { question: llmRes.data.data.reply, answer: '' }]);
    setStatus('ready');

  }, [interviewItems, interviewId]);



  const clickSpeakButton = () => {
    if (status === 'ready') {
      startRecording();
      setButtonState("다 말했어요!");
    }
    else if (status === 'recording') {
      stopRecording();
      setButtonState("대답할게요!");
    }
  };


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
    <InterviewContainer>
      <Header>
        <HeaderTitle>면접 맞춤 진행</HeaderTitle>
        <InterviewInfo>
          <InterviewDetail>
            <InterviewDetailTitle>Part 3. 면접이 진행 중이에요</InterviewDetailTitle>
            <div>실제 면접 상황인 것처럼 면접에 임해보세요.</div>
          </InterviewDetail>
          <div style={{width: "300px"}}>
            <Button
              feature={ButtonFeature.LINE}
              color={ButtonColor.WHITE}
              handler={() => stopInterviewApi()}
            >면접 중단하기</Button>
          </div>
        </InterviewInfo>
      </Header>
      <InterviewBox>
        <ScrollableArea ref={scrollableAreaRef}>
          <InterviewContent>
            {interviewItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.answer && (
                  <div style={{ display: "flex", justifyContent: "flex-end", marginLeft: "10%" }}>
                    <InterviewAnswer>{item.answer}</InterviewAnswer>
                  </div>
                )}
                {item.question && (
                  <div style={{ display: "flex", justifyContent: "flex-start", marginRight: "10%" }}>
                    <InterviewQuestion>{item.question}</InterviewQuestion>
                  </div>
                )}
              </React.Fragment>
            ))}
          </InterviewContent>
        </ScrollableArea>
        <div style={{display: "flex",justifyContent: "flex-end"}}>
           <div style={{width: "300px"}}>
            <Button
                disabled={isButtonDisabled}
                feature={buttonState === "대답할게요!" ?  ButtonFeature.LINE : ButtonFeature.NONE}
                color={buttonState === "대답할게요!" ? ButtonColor.WHITE : ButtonColor.BLUE}
                handler={() => clickSpeakButton()}
              >{buttonState}</Button>
           </div>
          </div>
      </InterviewBox>
    </InterviewContainer>
  );
};

export default Interview;


const InterviewContainer = styled.div`
  display: flex; 
  flex-direction: column;
  width: 100vw; 
  height: 100vh; 
  background-color: #3D4371; 
  color: #FFF; 
  padding: 70px 160px; 
  box-sizing: border-box; 
  gap: 24px;
`;

const Header = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 24px;
`;

const HeaderTitle = styled.div`
  color: #FFFFFFCC; 
  border: 1px solid #FFFFFFCC; 
  width: fit-content; 
  padding: 6px 10px; 
  border-radius: 7px;
`;

const InterviewInfo = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: space-between;
`;

const InterviewDetail = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 4px;
`;

const InterviewDetailTitle = styled.div`
  font-size: 20px; 
  font-weight: 700;
`;

const InterviewBox = styled.div`
  height: calc(100% - 140px); 
  border: 2px solid #FFF; 
  background-color: rgba(255, 255, 255, 0.20); 
  padding: 8px; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between;
  gap: 8px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const ScrollableArea = styled.div`
  overflow-y: auto;
`;

const InterviewContent = styled.div`
  flex-grow: 1; 
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end; 
  gap: 4px;
`;

const InterviewQuestion = styled.div`
  padding: 8px 16px; 
  background-color: #F9FAFB; 
  border-radius: 10px; 
  color: #000; 
  font-size: 14px; 
  width: fit-content;
`;

const InterviewAnswer = styled.div`
  padding: 8px 16px; 
  background-color: #8D99F3; 
  border-radius: 10px; 
  color: #FFF; 
  font-size: 14px; 
  width: fit-content;
`;