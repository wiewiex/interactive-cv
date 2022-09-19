import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Consent from "./components/Consent";
import Experience2 from "./components/Experience2";
import "./styles/App.scss";

function App() {
  return (
    <div className="appContainer">
      <div className="singlePage">
        <Header />
        <Technologies />
        <Education />
        <Experience />
      </div>
      <div className="singlePage">
        <Experience2 />
        <Consent />
      </div>
    </div>
  );
}

export default App;
