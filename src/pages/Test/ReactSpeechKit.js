import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

const ReactSpeeckKit = (props) => {
  const [value, setValue] = useState('');

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <>
      {listening ? (
        <div style={{ margin: '10px 0px' }}>인식 진행중 ... </div>
      ) : (
        <div style={{ margin: '10px 0px' }}>
          아래 버튼을 눌러 음성 인식을 시작하세요.
        </div>
      )}
      <button onMouseDown={listen} onMouseUp={stop}>
        <div>음성인식</div>
      </button>
      <div style={{ margin: '10px 0px' }}>음성인식 결과: {value}</div>
    </>
  );
};
export default ReactSpeeckKit;
