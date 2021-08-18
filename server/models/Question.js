import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  prompt: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  answer: String,
});

let Question = mongoose.model("Question", questionSchema);

export default Question;
