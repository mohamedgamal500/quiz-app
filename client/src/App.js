import "./App.css";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useSelector } from "react-redux";

function App() {
  const { quizState } = useSelector((state) => state);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState === "start" && <StartScreen />}
      {quizState === "playing" && <Quiz />}
      {quizState === "finished" && <EndScreen />}
    </div>
  );
}

export default App;
