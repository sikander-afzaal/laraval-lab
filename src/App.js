import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Hero from "./Pages/Hero/Hero.jsx";
import Section2 from "./Pages/Section2/Section2.jsx";
function App() {
  return (
    <div className="App">
      <div className="top-cont">
        <Header />
        <Hero />
      </div>
      <Section2 />
    </div>
  );
}

export default App;
