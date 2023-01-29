import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Services />
      <Experience/>
      <Works/>
    </div>
  );
}

export default App;
