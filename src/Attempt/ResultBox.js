import { useNavigate } from "react-router-dom";

export default function ResultBox({ el }) {
  const navigate = useNavigate();
  return (
    <div className="m-2 flex flex-wrap">
      <div className="bg-yellow-300 w-max">
        <div className="flex flex-col ">
          <div className="h-30 w-30">
            <p>{el.quiz.name}</p>
            <p>Attempted on {el.date.toString()}</p>
          </div>
          <button
            className="bg-white h-max w-max place-self-center"
            onClick={(e) => {
              navigate(`/results/details/${el.id}`, { state: { el } });
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
