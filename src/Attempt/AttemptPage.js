import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import React from "react";
import AttemptBox from "./AttemptBox";
import { AppContext } from "../context";
import { v4 as uuidv4 } from "uuid";
// import manualstuff from "./manual";

export default function AttemptPage() {
  //   const { quizid, questionid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    state: { reqone },
  } = location;
  // console.log(reqone);
  const length = reqone.qa.length;
  let arr = [];
  for (let i = 0; i < length; i = i + 1) {
    arr.push(""); //initially all responses are '' i.e. no option is selected
  }

  // const navigate = useNavigate();
  const { history, setHistory } = useContext(AppContext);
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);
  const [qno, setqno] = useState(1);
  const [responses, setResponses] = useState(arr);
  // console.log("initialized responses using useState");
  const [selection, setSelection] = useState("");
  const [val, setVal] = useState(Infinity);

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

  function handleChoice(e, sentqno, sentans) {
    console.log("He pressed", e.target);
    let newreponses = responses.map((piece, index) => {
      if (index === sentqno - 1) {
        return sentans;
      }
      return piece;
    });
    setResponses(newreponses);
    console.log("Now the responses array is", responses);
  }
  const data = reqone.qa[qno - 1];
  function finish() {
    //fill up history and feedback here
    const total = length;
    let unattempted = 0,
      attempted = 0,
      correct = 0,
      incorrect = 0;
    responses.map((el, index) => {
      if (reqone.qa[index].type === "mcq") {
        if (el === "") unattempted++;
        else attempted++;
        if (el === reqone.qa[index].answer) correct++;
        else incorrect++;
      } else {
        if (el === Infinity || el === "") unattempted++;
        else attempted++;
        if (Number(el) === Number(reqone.qa[index].answer)) {
          correct++;
        } else incorrect++;
      }
      return el;
    });
    let entry = {
      your_responses: responses,
      feedback: {
        attempted: attempted,
        unattempted: unattempted,
        total: total,
        correct: correct,
        incorrect: incorrect - unattempted,
      },
      date: new Date(),
      quiz: reqone,
      id: uuidv4(),
    };
    let newhistory = history;
    newhistory.push(entry);
    setHistory(newhistory);
    localStorage.setItem("history", JSON.stringify(newhistory));
    console.log("entry: ", entry);
    navigate(`/results/finish/${reqone.name}`);
  }

  return (
    <div>
      <AttemptBox
        handleChoice={handleChoice}
        data={data}
        qno={qno}
        responses={responses}
        selection={selection}
        setSelection={setSelection}
        val={val}
        setVal={setVal}
      />
      <div className="fixed bottom-0 w-[99%] border-8 border-blue-500 bg-[#435E74]">
        <Footer qno={qno} goNext={goNext} goPrev={goPrev} finish={finish} />
      </div>
    </div>
  );
}
