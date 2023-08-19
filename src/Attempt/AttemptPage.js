import { useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import React from "react";

export default function AttemptPage() {
  //   const { quizid, questionid } = useParams();
  const location = useLocation();
  const [qno, setqno] = useState(1);
  const [selection, setSelection] = useState("e");
  const {
    state: { reqone },
  } = location;
  console.log(reqone);
  const length = reqone.qa.length;
  console.log(length);
  function goNext() {
    setqno((qno % length) + 1);
  }
  function goPrev() {
    if (qno === 1) {
      setqno(length);
      return;
    }
    setqno(qno - 1);
  }
  function handleChoice(e) {
    setSelection(e.target.innerHTML[0]);
  }
  const data = reqone.qa[qno - 1];
  return (
    <div className="m-2 bg-[#435E74] w-[99%] h-full">
      <div className="block bg-[#141D3A] border-8 border-[#59D4C8]">
        {/* question div */}
        <p className="text-white">
          Q{qno} {data.question}
        </p>
      </div>
      <div className="numinput bg-white h-5"></div>
      <div className="options">
        <div
          className={
            selection === "a"
              ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
              : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
          }
          id="a"
          onClick={(e) => {
            handleChoice(e);
          }}
        >
          {/* answer div */}
          <p
            className={
              selection === "a" ? "text-white font-bold" : "text-[#23211A]"
            }
            id="aopt"
          >
            a. {data.options.a}
          </p>
        </div>
        <div
          className={
            selection === "b"
              ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
              : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
          }
          id="b"
          onClick={(e) => {
            handleChoice(e);
          }}
        >
          {/* answer div */}
          <p
            className={
              selection === "b" ? "text-white font-bold" : "text-[#23211A]"
            }
            id="bopt"
          >
            b. {data.options.b}
          </p>
        </div>
        <div
          className={
            selection === "c"
              ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
              : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
          }
          id="c"
          onClick={(e) => {
            handleChoice(e);
          }}
        >
          {/* answer div */}
          <p
            className={
              selection === "c" ? "text-white font-bold" : "text-[#23211A]"
            }
            id="copt"
          >
            c. {data.options.c}
          </p>
        </div>
        <div
          className={
            selection === "d"
              ? "block bg-black border-8 border-[#F1C716] w-full hover:scale-[1.02]"
              : "block bg-[#F9E5B3] border-8 border-[#F1C716] w-full hover:scale-[1.02]"
          }
          id="d"
          onClick={(e) => {
            handleChoice(e);
          }}
        >
          {/* answer div */}
          <p
            className={
              selection === "d" ? "text-white font-bold" : "text-[#23211A]"
            }
            id="dopt"
          >
            d. {data.options.d}
          </p>
        </div>
        <div>
          <button
            className="btn btn-blue m-2"
            onClick={(e) => {
              setSelection("e");
            }}
          >
            Clear Response
          </button>
        </div>
      </div>

      <div className="fixed bottom-0 w-[99%] border-8 border-blue-500 bg-[#435E74]">
        <Footer qno={qno} goNext={goNext} goPrev={goPrev} />
      </div>
    </div>
  );
}
