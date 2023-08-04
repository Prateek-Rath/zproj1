// import { useState } from "react";
// import SlidingBox from "./SlidingBox";
// import data from "./data.js";
//so we want to synchronously read the file and then render the questions on screen
import { useState } from "react";
import SlidingBox from "./SlidingBox";
import { Button } from "react-bootstrap";
import Modal1 from "./Modal";
export default function DashBoard() {
  const [arr, setArr] = useState([]);
  const [show, setShow] = useState(true);
  const addq = () => {
    setShow(!show);
  };
  return (
    <div className="mx-2 px-2">
      <h1>DashBoard</h1>
      <p>Hello</p>
      <br></br>
      {show && (
        <Modal1 show={show} setShow={setShow} arr={arr} setArr={setArr} />
      )}
      {arr.length > 0 ? (
        <SlidingBox arr={arr} />
      ) : (
        <p className="font-bold p-2">No questions right now</p>
      )}
      <Button onClick={addq} className="bg-green-500 rounded">
        Add question
      </Button>
    </div>
  );
}
