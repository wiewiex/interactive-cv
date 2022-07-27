import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    setInterval(() => {
      
      setCount(prevState => {
        return prevState + 1;
      })

    },1000)

  },[])

  return (
    <div className="appContainer">
        <Header/>
        <h2>{count}</h2>
    </div>
  );
}

export default App;
