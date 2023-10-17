import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenerateInterview from "./pages/GenerateInterview";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generate-interview" element={<GenerateInterview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
