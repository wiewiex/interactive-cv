import Education from "./components/Education";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import "./styles/App.scss";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Technologies />
      <Education />
    </div>
  );
}

export default App;
