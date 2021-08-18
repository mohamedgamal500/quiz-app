import React from "react";
import "../App.css";
import { setQuizState, setScore, setUserName } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addResults } from "../api";

const EndScreen = () => {
  const dispatch = useDispatch();
  const { userName, score, questionsLength } = useSelector((state) => state);

  useEffect(() => {
    addResults({ userName, score, questionsLength }).then((response) => {
      console.log(response.data);
    });
  }, []);

  const restartQuiz = () => {
    dispatch(setUserName(""));
    dispatch(setScore(0));
    dispatch(setQuizState("start"));
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h2>{userName}</h2>
      <h1>
        {score} out of {questionsLength}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
