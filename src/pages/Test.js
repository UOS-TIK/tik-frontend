import { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";

const Test = () => {

  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <div style={{margin: "50px 80px"}}>
      <div>
        <h1>Test 1 : react-speech-kit 라이브러리</h1>
        {listening ? <div style={{margin: "10px 0px"}}>인식 진행중 ... </div> : <div style={{margin: "10px 0px"}}>아래 버튼을 눌러 음성 인식을 시작하세요.</div>}
        <button onMouseDown={listen} onMouseUp={stop}>
          <div>음성인식</div>
        </button>
        <div style={{margin: "10px 0px"}}>음성인식 결과: {value}</div>
      </div>
      <div>
        <h1>Test 2</h1>
        <div>음성인식 결과: </div>
      </div>
    </div>
  );
};

export default Test;