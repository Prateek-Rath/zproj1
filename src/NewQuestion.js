import "./index.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function Modal1({ setShow, arr, setArr, show }) {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState("");
  // const [opt, setOpt] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newarr = arr;
    newarr.push({ key: uuidv4(), question: q, answer: ans });
    setArr(newarr);
    setShow(false);
  };
  // const handleoptChange = (e) => {};
  return (
    <div className="modal bg-red-500">
      <p>THIS IS THE NEW QUESTION MODAL</p>
      <div className="flex-row">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="question">QUESTION</label>
          <br></br>
          <input
            type="text"
            name="question"
            id="question"
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="answer">ANSWER</label>
          <br></br>
          <input
            name="answer"
            id="answer"
            type="text"
            onChange={(e) => setAns(e.target.value)}
          ></input>
          <br></br>
          <div className="flex flex-row justify-between">
            <button
              type="button"
              className="bg-blue-500"
              onClick={() => setShow(false)}
            >
              CLOSE
            </button>
            <button type="submit" className="bg-purple-500">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
