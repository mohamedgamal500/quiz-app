export const setUserName = (userName) => {
  return {
    type: "setUserName",
    payload: userName,
  };
};

export const setQuizState = (state) => {
  return {
    type: "setQuizState",
    payload: state,
  };
};

export const setScore = (score) => {
  return {
    type: "setScore",
    payload: score,
  };
};

export const setQuestionsLength = (length) => {
  return {
    type: "setQuestionsLength",
    payload: length,
  };
};
