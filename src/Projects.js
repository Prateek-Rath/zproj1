import { useContext, useEffect } from "react";
import { AppContext } from "./context";
// import { useState } from "react";
import React from "react";
// import { ReactDOM } from "react";
import "./App.css";
// import "./index.css";
import { v4 as uuidv4 } from "uuid";
import QuizBox from "./QuizBox";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function Project() {
  const { quizlist, setQuizlist } = useContext(AppContext); //each quiz should have a name and an id
  useEffect(() => {
    localStorage.setItem("quizlist", JSON.stringify(quizlist));
    // console.log(
    // "Using useEffect whenever quizlist changes I set the localstorage variable",
    // quizlist
    // );
  }, [quizlist]);

  const navigate = useNavigate();
  // console.log("quizlist", quizlist);
  function handleClick(e) {
    e.preventDefault();
    const el = { key: uuidv4(), name: "", qa: [] };
    let arr = quizlist;
    arr.push(el);
    setQuizlist(arr);
    localStorage.setItem("quizlist", JSON.stringify(arr));
    const key = el.key;
    navigate(`./edit/${key}`);
  }

  return (
    <div className="m-2" id="quizlist">
      {quizlist.length > 0 ? (
        <>
          <h1>Here are your quizzes</h1>
          <div className="flex flex-wrap m-2">
            {quizlist.map((el, index) => {
              return (
                <QuizBox
                  el={el}
                  key={el.key}
                  className="flex flex-wrap"
                ></QuizBox>
              );
            })}
          </div>
        </>
      ) : (
        <h1>You haven't created any quizes yet</h1>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        type="submit"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Create New Quiz
      </button>
      <div id="extra"></div>
    </div>
  );
}
