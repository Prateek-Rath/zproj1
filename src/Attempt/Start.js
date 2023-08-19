import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { AppContext } from "../context";

export default function Start() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { quizlist } = useContext(AppContext);
  const reqone = quizlist.find((piece) => piece.key === id);
  console.log("reqone", reqone);
  console.log("id is", id);
  return (
    <div className="">
      <p>You are about to start the quiz</p>
      <button
        className="btn-orange-500"
        onClick={() => {
          console.log("trying to start");
          navigate(`/quiz/attempt/${id}/${reqone.qa[0].key}`, {
            state: { reqone: reqone },
          });
        }}
      >
        Start
      </button>
    </div>
  );
}
