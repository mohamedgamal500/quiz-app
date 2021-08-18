import mongoose from "mongoose";

const resultSchema = mongoose.Schema({
  userName: String,
  score: Number,
  numberOfQuestions: Number,
});

let Result = mongoose.model("results", resultSchema);

export default Result;
