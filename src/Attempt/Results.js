import { useContext } from "react";
import { AppContext } from "../context";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ResultBox from "./ResultBox";
import AreYouSure from "../AreYouSure";
export default function Results() {
  const { history, setHistory } = useContext(AppContext);
  let disp = history;

  const [reqno, setReqno] = useState("");
  if (history.length === 0) return <h1>No history as of now</h1>;
  //   disp = disp.reverse();

  // const [reqno, setReqno] = useState(0);
  return (
    <div className="m-2">
      <div>
        <p>Enter the number of entries you want to see</p>
        <input
          className="input"
          value={reqno}
          onChange={(e) => {
            setReqno(e.target.value);
          }}
        ></input>
        {/* <button onClick={setReqno(toString(history.length))}>View All</button> */}
      </div>
      <div className="flex flex-wrap">
        {reqno === ""
          ? disp.map((el, index) => {
              return <ResultBox el={el} key={el.id} />;
            })
          : disp.map((el, index) => {
              if (index < Number(reqno))
                return <ResultBox el={el} key={el.id} />;
              else return <div key={uuidv4()}></div>;
            })}
      </div>
      {/* <button
        className="btn bg-red-500"
        onClick={() => {
          setHistory([]);
          localStorage.setItem("history", JSON.stringify([]));
        }}
      >
        Clear History
      </button> */}
      <AreYouSure
        onConfirm={() => {
          setHistory([]);
          localStorage.setItem("history", JSON.stringify([]));
        }}
        text="Clear History"
        classtext="rounded absolute left-1/2 top-1/2 m-1 p-1 max-h-full max-w-full transform -translate-x-1/2 -translate-y-1/2 bg-blue-500"
      />
    </div>
  );
}
