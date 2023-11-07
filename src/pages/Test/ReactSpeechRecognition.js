import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const ReactSpeechRecognition = (props) => {
  const [value, setValue] = useState("");

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  function listen() {
    resetTranscript();
    SpeechRecognition.startListening({
      language: "ko-KR",
      continuous: true,
    });
  }

  function stop() {
    SpeechRecognition.stopListening();
  }

  useEffect(() => {
    setValue(transcript);
    console.log(transcript);
  }, [transcript]);

  return (
    <>
      {listening ? (
        <div style={{ margin: "10px 0px" }}>인식 진행중 ... </div>
      ) : (
        <div style={{ margin: "10px 0px" }}>
          아래 버튼을 눌러 음성 인식을 시작하세요.
        </div>
      )}
      <button onMouseDown={listen} onMouseUp={stop}>
        <div>음성인식</div>
      </button>
      <div style={{ margin: "10px 0px" }}>음성인식 결과: {value}</div>
    </>
  );
};
export default ReactSpeechRecognition;
