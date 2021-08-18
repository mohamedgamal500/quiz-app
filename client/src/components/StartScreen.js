import "../App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName, setQuizState } from "../actions";
function StartScreen() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. Mohamed Gamal"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        disabled={!name ? true : false}
        onClick={() => {
          dispatch(setUserName(name));
          dispatch(setQuizState("playing"));
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
