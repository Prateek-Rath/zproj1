import "./App.css";
import "./index.css";
import { useContext, useState } from "react";
// import EditQuestion from "./EditQuestion";
import Edit1 from "./EditQuestion2";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "./context";

export default function QuestionBox({ el, arr, setArr, index, type }) {
  const [show, setShow] = useState(false);
  const { quizlist } = useContext(AppContext);
  //I want to know what quiz this question belongs to
  //it's basically present in the url
  const { id } = useParams();
  const { open, setOpen } = useContext(AppContext);
  const reqquiz = quizlist.find((quiz) => quiz.key === id);
  const reqname = reqquiz.name;
  const navigate = useNavigate();
  const goView = (e) => {
    // console.log(reqname);
    navigate(`/view/${reqname}/${index + 1}`); //so it's like /name/qno
  };
  const handleDelete = (e) => {
    const newarr = arr.filter((piece) => piece.key !== el.key);
    setArr(newarr);
  };
  const handleEdit = (e) => {
    //but what if another modal is already open
    if (open) {
      alert("Close the current modal first");
      return;
    }
    setShow(!show);
    setOpen(!open);
  };
  return show ? (
    <Edit1 el={el} setShow={setShow} key={el.key} arr={arr} setArr={setArr} />
  ) : (
    <div
      key={el.key}
      className="flex flex-row bg-yellow-500 border-stone-50 mx-2 my-2"
    >
      <div key={el.key} className="flex flex-row px-2 flex-wrap">
        <p>
          Q {index + 1}
          {/* {el.question} */}
        </p>
        {/* <p>A {el.answer}</p> */}
      </div>
      <div className="flex flex-row flex-wrap px-2">
        <button
          type="button"
          className="bg-white my-2"
          onClick={(e) => goView(e)}
        >
          View
        </button>
        <button
          className="bg-red-500 my-2"
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 my-2"
          onClick={(e) => {
            handleEdit(e);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
