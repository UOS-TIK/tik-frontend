import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GenerateInterview from "./pages/GenerateInterview";
import Main from "./pages/Main";
import ReactSpeechKit from "./pages/Test/ReactSpeechKit";
import ReactSpeechRecognition from "./pages/Test/ReactSpeechRecognition";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Resume from "./pages/Resume";
import { useLocation } from 'react-router-dom';
import StartInterview from "./pages/StartInterview";
import Interview from "./pages/Interview";

function CheckAuth({children}) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('login-token');
    if (!token && location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/test/1" && location.pathname !== "/test/2") {
      navigate('/login');
    }
  }, [location]);

  return children;
}

function NotFound() {
  return <h2 style={{padding: "40px"}}>페이지를 찾을 수 없습니다.<br />올바른 접근인지 확인해주세요. </h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckAuth><Main /></CheckAuth>} />
        <Route path="/generate-interview" element={<CheckAuth><GenerateInterview /></CheckAuth>} />
        <Route path="/test/1" element={<ReactSpeechKit />} />
        <Route path="/test/2" element={<ReactSpeechRecognition />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume" element={<CheckAuth><Resume /></CheckAuth>} />
        <Route path="/start-interview" element={<CheckAuth><StartInterview /></CheckAuth>} />
        <Route path="/interview" element={<CheckAuth><Interview /></CheckAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
