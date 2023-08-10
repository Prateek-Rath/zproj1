// import { useState } from "react";
// import SlidingBox from "./SlidingBox";
// import data from "./data.js";
import { useState } from "react";
import SlidingBox from "./SlidingBox";
import { Button } from "react-bootstrap";
import Modal1 from "./NewQuestion";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./context";
import "./App.css";

export default function DashBoard() {
  const { quizlist, setQuizlist, open, setOpen } = useContext(AppContext);
  const { id } = useParams();
  let defaultel = quizlist.find((piece) => piece.key === id);
  const [arr, setArr] = useState(defaultel.qa);
  const [name, setName] = useState(defaultel.name);

  const [show, setShow] = useState(false);
  // console.log("Hey, via Appcontext, I set quilist to", quizlist);
  const navigate = useNavigate();
  const addq = () => {
    if (open) {
      alert("First close the existing modal");
      return;
    }
    setShow(!show);
    setOpen(!open);
  };
  let flag = false;
  quizlist.map((el, ind) => {
    if (el.key === id) {
      flag = true;
    }
    return el;
  });
  if (!flag) return <h1>PageNotFound</h1>;
  // const text = `Here is the Quiz Setup Page ${id}`;

  function savequiz() {
    if (name === "") {
      alert("You have to give your quiz a name!");
      return;
    }
    let flag = false;
    quizlist.map((quiz) => {
      if (quiz.name === name && quiz.key !== id) flag = true;
      return quiz;
    });
    if (flag) {
      alert("Two quizzes cannot have the same name");
      return;
    }
    let newquiz = quizlist;
    newquiz = newquiz.map((piece) => {
      if (piece.key === id) {
        // console.log("found you!");
        // console.log(name, piece.name);
        return { name: name, key: piece.key, qa: arr };
      } else return piece;
    });
    setTimeout(() => {
      // console.log("newquiz: ", newquiz);
      setQuizlist(newquiz);
      // console.log("Your quiz was saved!!");
      // console.log(localStorage);
      navigate("/");
    }, 500);
  }

  function goback() {
    navigate("/");
  }
  // console.log(arr);
  return (
    <div className="mx-2 px-2">
      {/* <h1>{text}</h1> */}
      <label htmlFor="quiz-name">Enter the name of the quiz</label>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          // console.log(name);
        }}
      ></input>
      <br></br>
      {show && (
        <Modal1 show={show} setShow={setShow} arr={arr} setArr={setArr} />
      )}
      {arr.length > 0 ? (
        <SlidingBox arr={arr} setArr={setArr} />
      ) : (
        <p className="font-bold p-2">No questions right now</p>
      )}
      <Button onClick={addq} className="bg-green-500 rounded">
        Add question
      </Button>
      <Button onClick={savequiz} className="bg-orange-500 rounded">
        Save Quiz
      </Button>
      <Button onClick={goback} className="bg-black rounded">
        Back
      </Button>
    </div>
  );
}
