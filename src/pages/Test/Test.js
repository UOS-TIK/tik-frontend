import ReactSpeeckKit from './ReactSpeechKit';
import ReactSpeechRecognition from './ReactSpeechRecognition';

const Test = () => {
  return (
    <div style={{ margin: '50px 80px' }}>
      <div>
        <h1>Test 1 : react-speech-kit 라이브러리</h1>
        <ReactSpeeckKit />
      </div>
      <div>
        <h1>Test 2 : react-speech-recognition 라이브러리</h1>
        <ReactSpeechRecognition />
      </div>
    </div>
  );
};

export default Test;
