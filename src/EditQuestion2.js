import "./index.css";
import "./App.css";
// import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function Edit1({ el, setShow, arr, setArr }) {
  const [q, setQ] = useState(el.question);
  const [ans, setAns] = useState(el.answer);
  const [type, setType] = useState(el.type);
  const [file, setFile] = useState(el.img);
  const [options, setOptions] = useState(el.options);
  // const [opt, setOpt] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this handle submit was called");
    let newarr = arr;
    //if the question's key is equal to the element's key, then set the question to be
    newarr.map((piece, index) => {
      if (piece.key === el.key) {
        let p2 = el;
        p2.question = q;
        p2.answer = ans;
        p2.key = el.key;
        p2.img = file;
        p2.options = options;
        return p2;
      } else return piece;
    });
    setArr(newarr);
    setShow(false);
  };
  // const handleoptChange = (e) => {};
  return (
    <div className="modal bg-green-500">
      {/* <p>THIS IS THE EDIT QUESTION MODAL</p> */}
      <div className="flex-row">
        <form onSubmit={(e) => handleSubmit(e)} style={{ overflow: "scroll" }}>
          <label htmlFor="q-type">Choose the q type</label>
          <select
            name="q-type"
            id="q-type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              console.log("option set to ", e.target.value);
            }}
          >
            <option value="mcq">Multiple Choice Single Correct</option>
            <option value="num">Numeric</option>
            <option value="subj">Subjective</option>
          </select>
          <br></br>
          <br></br>
          <label htmlFor="question">QUESTION</label>
          <input
            type="text"
            name="question"
            id="question"
            value={q}
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
                value={ans}
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
                  value={options.a}
                  onChange={(e) => {
                    const val = e.target.value;
                    setOptions({ ...options, a: val });
                  }}
                ></input>
                <label htmlFor="b">B</label>{" "}
                <input
                  name="b"
                  type="text"
                  value={options.b}
                  onChange={(e) => {
                    const val = e.target.value;
                    setOptions({ ...options, b: val });
                  }}
                ></input>
                <label htmlFor="c">C</label>{" "}
                <input
                  name="c"
                  type="text"
                  value={options.c}
                  onChange={(e) => {
                    const val = e.target.value;
                    setOptions({ ...options, c: val });
                  }}
                ></input>
                <label htmlFor="d">D</label>{" "}
                <input
                  name="d"
                  type="text"
                  value={options.d}
                  onChange={(e) => {
                    const val = e.target.value;
                    setOptions({ ...options, d: val });
                  }}
                ></input>
                <label htmlFor="answer">ANSWER</label>
                <input
                  name="answer"
                  id="answer"
                  type="text"
                  value={ans}
                  onChange={(e) => setAns(e.target.value)}
                ></input>
              </div>
              <br></br>
            </>
          )}
          <br></br>
          <div>
            <label htmlFor="q-img">Attach an image(if you want)</label>
            <input
              name="q-img"
              id="q-img"
              type="file"
              value={file}
              onChange={(e) => setFile(e.target.value)}
            ></input>
          </div>
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
