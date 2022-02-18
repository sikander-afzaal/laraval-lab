import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import "./Pages/Page1/Page1.jsx";
import Page1 from "./Pages/Page1/Page1.jsx";
import Project from "./Pages/Projects/Project.jsx";
import Vision from "./Pages/Vision/Vision.jsx";
import About from "./Pages/About/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/vision" element={<Vision />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
