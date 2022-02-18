import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import "./Pages/Page1/Page1.jsx";
import Page1 from "./Pages/Page1/Page1.jsx";
import Project from "./Pages/Projects/Project.jsx";
import Vision from "./Pages/Vision/Vision.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/vision" element={<Vision />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
