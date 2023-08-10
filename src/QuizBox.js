import "./App.css";
import { useContext } from "react";
import { AppContext } from "./context";
import { useNavigate } from "react-router-dom";

export default function QuizBox({ el }) {
  const { quizlist, setQuizlist } = useContext(AppContext);
  const navigate = useNavigate();
  function deletequiz(e) {
    let newlist = quizlist;
    newlist = newlist.filter((piece) => piece.key !== el.key);
    setQuizlist(newlist);
    // localStorage.setItem("quizlist", JSON.stringify(newlist));
    // console.log("done");
  }
  function editquiz(e) {
    // console.log("You are trying to edit");
    navigate(`/edit/${el.key}`);
  }
  return (
    <div className="flex flex-col bg-amber-500 m-2">
      <pre className="m-y-0">{el.name} </pre>
      <div className="flex flex-row">
        <button className="m-x-0 m-y-0 bg-blue-500 hover:bg-blue-400 text-white font-boldborder-b-4 border-blue-700 hover:border-blue-500 rounded">
          Attempt
        </button>
        <button
          className="bg-red-500 text-white font-bold border-red-700 hover:border-red-500 rounded"
          onClick={(e) => {
            deletequiz(e);
          }}
        >
          Delete
        </button>
        <button
          className="bg-green-500 text-white font-bold border-green-700 hover:border-green-500 rounded"
          onClick={(e) => editquiz(e)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
