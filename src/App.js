import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenerateInterview from "./pages/GenerateInterview";
import Main from "./pages/Main";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/generate-interview" element={<GenerateInterview />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
