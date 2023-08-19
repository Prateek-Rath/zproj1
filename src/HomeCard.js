import { useNavigate } from "react-router-dom";

export default function HomeCard({ title, path }) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div
      onClick={() => handleClick(path)}
      id={title}
      className="shadow-md bg-blue-400 w-40 h-40 text-center hover:cursor-pointer hover:bg-blue-500 flex justify-center place-content-center m-2 content-center place-items-center shrink-2 p-2 rounded"
    >
      {title}
    </div>
  );
}
