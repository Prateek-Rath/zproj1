import "./App.css";
import "./index.css";
import { useState } from "react";
// import EditQuestion from "./EditQuestion";
import Edit1 from "./EditQuestion2";

export default function QuestionBox({ el, arr, setArr, index, type }) {
  const [show, setShow] = useState(false);
  const handleDelete = (e) => {
    const newarr = arr.filter((piece) => piece.key !== el.key);
    setArr(newarr);
  };
  const handleEdit = (e) => {
    //we have to set arr based on what he types into the modal
    setShow(true);
  };
  return show ? (
    <Edit1 el={el} setShow={setShow} key={el.key} arr={arr} setArr={setArr} />
  ) : (
    <div
      key={el.key}
      className="flex flex-row bg-yellow-500 border-stone-50 mx-2 my-2"
    >
      <div key={el.key} className="flex flex-col px-2 flex-wrap">
        <p>
          Q {index + 1}
          {/* {el.question} */}
        </p>
        {/* <p>A {el.answer}</p> */}
      </div>
      <div className="flex flex-col flex-wrap px-2">
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
