import "./index.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from "react";
import { AppContext } from "./context";
export default function Modal1({ setShow, arr, setArr, show }) {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState("");
  const [type, setType] = useState("mcq");
  const { open, setOpen } = useContext(AppContext);
  const file = "dummy";
  // const [file, setFile] = useState(undefined);
  const [options, setOptions] = useState({ a: "", b: "", c: "", d: "" });
  // const [opt, setOpt] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newarr = arr;
    if (type === "mcq") {
      if (
        !(
          ans.toLowerCase() === "a" ||
          ans.toLowerCase() === "b" ||
          ans.toLowerCase() === "c" ||
          ans.toLowerCase() === "d"
        )
      ) {
        alert(
          "Your answer must be a single lowercase alphabet (only 'a', 'b', 'c', 'd' are allowed)"
        );
        return;
      }
      newarr.push({
        key: uuidv4(),
        question: q,
        answer: ans,
        type: type,
        img: file,
        options: options,
      });
      console.log(newarr.img);
    } else {
      if (typeof ans != typeof 1) {
        alert("Your answer must be a number");
      }
      newarr.push({
        key: uuidv4(),
        question: q,
        answer: ans,
        type: type,
        img: file,
        options: options,
      });
    }

    setArr(newarr);
    setShow(false);
    setOpen(!open);
  };
  // const handleoptChange = (e) => {};
  return (
    <div className="modal bg-green-500 flex flex-wrap">
      {/* <p>THIS IS THE NEW QUESTION MODAL</p> */}
      <div className="flex flex-row">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="q-type">Choose the q type</label>
          <select
            name="q-type"
            id="q-type"
            onChange={(e) => {
              setType(e.target.value);
              // console.log("option set to ", e.target.value);
            }}
          >
            <option value="mcq">Multiple Choice Single Correct</option>
            <option value="num">Numeric</option>
            {/* <option value="subj">Subjective</option> */}
          </select>
          <br></br>
          <br></br>
          <label htmlFor="question">QUESTION</label>
          <input
            type="text"
            name="question"
            id="question"
            onChange={(e) => setQ(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          {(type === "subj" || type === "num") && (
            <>
              <label htmlFor="answer">ANSWER</label>
              <input
                name="answer"
                id="answer"
                type="text"
                onChange={(e) => setAns(e.target.value)}
              ></input>
              <br></br>
            </>
          )}
          {type === "mcq" && (
            <>
              <div>
                <label htmlFor="a">A</label>{" "}
                <input
                  name="a"
                  type="text"
                  onChange={(e) => {
                    options.a = e.target.value;
                    setOptions(options);
                  }}
                ></input>
                <label htmlFor="b">B</label>{" "}
                <input
                  name="b"
                  type="text"
                  onChange={(e) => {
                    options.b = e.target.value;
                    setOptions(options);
                  }}
                ></input>
                <label htmlFor="c">C</label>{" "}
                <input
                  name="c"
                  type="text"
                  onChange={(e) => {
                    options.c = e.target.value;
                    setOptions(options);
                  }}
                ></input>
                <label htmlFor="d">D</label>{" "}
                <input
                  name="d"
                  type="text"
                  onChange={(e) => {
                    options.d = e.target.value;
                    setOptions(options);
                  }}
                ></input>
                <label htmlFor="answer">ANSWER</label>
                <input
                  name="answer"
                  id="answer"
                  type="text"
                  onChange={(e) => setAns(e.target.value)}
                ></input>
              </div>
              <br></br>
            </>
          )}
          <br></br>
          {/* <div>
            <label htmlFor="q-img">Attach an image(if you want)</label>
            <input
              name="q-img"
              id="q-img"
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log(file);
              }}
            ></input>
          </div>
          <br></br> */}
          <div className="flex flex-row justify-between">
            <button
              type="button"
              className="bg-blue-500"
              onClick={() => {
                setShow(false);
                setOpen(!open);
              }}
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
