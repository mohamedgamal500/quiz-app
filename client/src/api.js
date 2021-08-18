import axios from "axios";

const url = "http://localhost:5000";

export const fetchQuestions = () => axios.get(url);
export const addResults = (result) => axios.post(url, result);
