import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./context";
// import "./index.css";

function getreqel(quizlist, name) {
  let newlist = quizlist;
  let reqel;
  reqel = newlist.find((piece) => piece.name === name);
  return reqel;
}
export default function QuestionView() {
  const navigate = useNavigate();
  const { name, qno } = useParams();
  const { quizlist } = useContext(AppContext);
  const reqel = getreqel(quizlist, name);
  if (reqel.qa.length < qno)
    return <p>The question you are looking for doesn't exist</p>;
  const type = reqel.qa[qno - 1].type;
  const opts = reqel.qa[qno - 1].options;
  //   console.log(type);
  return (
    <>
      {/* <p className="m-2 ">
        You are currently viewing {name}'s question number {qno}
      </p> */}
      <div className="view m-2">
        <div className="shadow md p-2 border-green-500">
          <p>Question {qno}</p>
          <p className="w-full">{reqel.qa[qno - 1].question}</p>
        </div>
        {type === "mcq" ? (
          <div className="opts">
            <p>type: mcq</p>
            <div className="w-100 h-100 rounded-md border-5 border-black bg-blue-300 hover:bg-blue-200">
              <p className="sm:m-1 lg:m-2 md:m-2 ">a. {opts.a}</p>
            </div>
            <div className="w-100 h-100 rounded-md border-5 border-black bg-blue-300 hover:bg-blue-200">
              <p className="sm:m-1 lg:m-2 md:m-2">b. {opts.b}</p>
            </div>
            <div className="w-100 h-100 rounded-md border-5 border-black bg-blue-300 hover:bg-blue-200">
              <p className="sm:m-1 lg:m-2 md:m-2">c. {opts.c}</p>
            </div>
            <div className="w-100 h-100 rounded-md border-5 border-black bg-blue-300 hover:bg-blue-200">
              <p className="sm:m-1 lg:m-2 md:m-2">d. {opts.d}</p>
            </div>
          </div>
        ) : type === "subj" ? (
          <p>type: subjective</p>
        ) : (
          <p>type: numeric</p>
        )}
      </div>
      <button
        className="btn bg-blue-500 m-2"
        onClick={() => {
          navigate(`/edit/${reqel.key}`);
        }}
      >
        Back
      </button>
    </>
  );
}
