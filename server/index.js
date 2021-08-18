import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Question from "./models/Question.js";
import Result from "./models/Result.js";

const app = express();

app.use(cors());
app.use(express.json());

const CONNECTION_URL =
  "mongodb+srv://mgMern:mgMern123@clustercrud.d5k9m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

const Questions = [
  {
    prompt: "Which of this is not a programming language?",
    optionA: "Python",
    optionB: "JavaScript",
    optionC: "React",
    optionD: "Java",
    answer: "C",
  },
  {
    prompt: "What is the capital of Egypt?",
    optionA: "London",
    optionB: "Cairo",
    optionC: "New work",
    optionD: "Mosco",
    answer: "B",
  },
  {
    prompt: "What is the result of 1 + 2?",
    optionA: "1",
    optionB: "30",
    optionC: "3",
    optionD: "4",
    answer: "C",
  },
  {
    prompt: "What is the result of 1 x 2?",
    optionA: "1",
    optionB: "2",
    optionC: "3",
    optionD: "4",
    answer: "B",
  },
  {
    prompt: "What is the result of 5 x 2?",
    optionA: "10",
    optionB: "29",
    optionC: "300",
    optionD: "4",
    answer: "A",
  },
  {
    prompt: "What is the result of 0 x 2?",
    optionA: "0",
    optionB: "29",
    optionC: "30",
    optionD: "400",
    answer: "A",
  },
  {
    prompt: "What is the result of 10 x 2?",
    optionA: "10",
    optionB: "20",
    optionC: "50",
    optionD: "400",
    answer: "B",
  },

  {
    prompt: "What is the result of 100 / 2?",
    optionA: "100",
    optionB: "20",
    optionC: "50",
    optionD: "400",
    answer: "C",
  },
  {
    prompt: "What is the result of 50 / 2?",
    optionA: "100",
    optionB: "25",
    optionC: "50",
    optionD: "400",
    answer: "B",
  },
  {
    prompt: "What is the result of 10 / 2?",
    optionA: "100",
    optionB: "25",
    optionC: "5",
    optionD: "40",
    answer: "C",
  },
];

async function mySeeder() {
  const questions = await Question.find();
  console.log("questions", questions);
  if (questions.length === 0) {
    Questions.forEach(
      ({ prompt, optionA, optionB, optionC, optionD, answer }) => {
        const q = new Question({
          prompt,
          optionA,
          optionB,
          optionC,
          optionD,
          answer,
        });
        q.save();
      }
    );
  }
}

mySeeder();

app.post("/", async (req, res) => {
  try {
    const { userName, score, questionsLength } = req.body;
    console.log({ userName, score, questionsLength });
    const result = new Result({
      userName,
      score,
      numberOfQuestions: questionsLength,
    });
    const res = await result.save();
    res.json(save);
  } catch (error) {
    res.json(error);
  }
});

app.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.json(error);
  }
});
