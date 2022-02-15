import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Hero from "./Pages/Hero/Hero.jsx";
import Section2 from "./Pages/Section2/Section2.jsx";
import Section3 from "./Pages/Section3/Section3.jsx";
import Section4 from "./Pages/Section4/Section4.jsx";
import Section5 from "./Pages/Section5/Section5.jsx";
function App() {
  return (
    <div className="App">
      <div className="top-cont">
        <Header />
        <Hero />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
