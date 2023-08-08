import { useContext } from "react";
import { AppContext } from "./context";
import "./App.css";
import { useState } from "react";

export default function Project() {
  // console.log("hiekfkl");
  // const { quiz, setQuiz } = useContext(AppContext);
  return (
    <div>
      {/* {quiz.length <= 0 ? (
        <h1>You Don't have any quizes right now</h1>
      ) : (
        <h1>Here are your quizes</h1>
      )} */}
      <button className="btn">Add New Quiz</button>
    </div>
  );
}
