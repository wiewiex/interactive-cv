import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Consent from "./components/Consent";
import "./styles/App.scss";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Technologies />
      <Education />
      <Experience />
      <Consent />
    </div>
  );
}

export default App;
