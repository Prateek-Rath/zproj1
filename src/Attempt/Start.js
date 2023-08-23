import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AppContext } from "../context";
import "../App.css";

export default function Start() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { quizlist } = useContext(AppContext);
  const reqone = quizlist.find((piece) => piece.key === id);
  console.log("reqone", reqone);
  console.log("id is", id);
  return (
    <div className="">
      <p>
        You are about to start the quiz, Once you start you cannot exit without
        finishing. If you refresh the page, your attempt information will be
        lost
      </p>

      <button
        className="btn bg-orange-500 m-2"
        onClick={() => {
          console.log("trying to start");
          navigate(`/quiz/attempt/${id}/${reqone.qa[0].key}`, {
            state: { reqone: reqone },
          });
        }}
      >
        Start
      </button>
      <button
        className="btn bg-blue-500 m-2"
        onClick={() => {
          navigate("/quiz");
        }}
      >
        Back
      </button>
    </div>
  );
}
