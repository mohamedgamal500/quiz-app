import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import quizReducer from "./reducers/quiz";
import { Provider } from "react-redux";

// store
const store = createStore(
  quizReducer,
  // for redux debugging tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
