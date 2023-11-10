import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenerateInterview from './pages/GenerateInterview';
import Main from './pages/Main';
import Test from './pages/Test/Test';
import ReactSpeechKit from './pages/Test/ReactSpeechKit';
import ReactSpeechRecognition from './pages/Test/ReactSpeechRecognition';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/generate-interview' element={<GenerateInterview />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test/1' element={<ReactSpeechKit />} />
        <Route path='/test/2' element={<ReactSpeechRecognition />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
