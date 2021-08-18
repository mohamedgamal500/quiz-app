const quizReducer = (
  state = { quizState: "start", userName: "", score: 0, questionsLength: 0 },
  action
) => {
  switch (action.type) {
    case "setQuizState":
      return { ...state, quizState: action.payload };
    case "setUserName":
      return { ...state, userName: action.payload };
    case "setScore":
      return { ...state, score: action.payload };
    case "setQuestionsLength":
      return { ...state, questionsLength: action.payload };
    default:
      return state;
  }
};

export default quizReducer;
