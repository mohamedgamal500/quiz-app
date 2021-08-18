import "../App.css";
import { useState, useEffect } from "react";
import { setQuizState, setScore, setQuestionsLength } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../api";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const { score } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuestions().then((response) => {
      console.log(response.data);
      setQuestions(response.data);
      dispatch(setQuestionsLength(response.data.length));
    });
  }, []);

  const nextQuestion = (option) => {
    if (currentQuestion === questions.length - 1) {
      if (questions[currentQuestion].answer === option) {
        dispatch(setScore(score + 1));
      }
      dispatch(setQuizState("finished"));
    } else {
      if (questions[currentQuestion].answer === option) {
        dispatch(setScore(score + 1));
      }
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    questions.length !== 0 && (
      <div className="Quiz">
        <h1>{questions[currentQuestion].prompt}</h1>
        <div className="questions">
          <button
            onClick={() => {
              nextQuestion("A");
            }}
          >
            {questions[currentQuestion].optionA}
          </button>
          <button
            onClick={() => {
              nextQuestion("B");
            }}
          >
            {questions[currentQuestion].optionB}
          </button>
          <button
            onClick={() => {
              nextQuestion("C");
            }}
          >
            {questions[currentQuestion].optionC}
          </button>
          <button
            onClick={() => {
              nextQuestion("D");
            }}
          >
            {questions[currentQuestion].optionD}
          </button>
        </div>
      </div>
    )
  );
}

export default Quiz;
