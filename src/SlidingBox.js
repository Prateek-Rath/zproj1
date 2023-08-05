// import { useState } from "react";
import QuestionBox from "./QuestionBox";
export default function SlidingBox({ arr, setArr, show, setShow }) {
  return (
    <div className="container flex flex-wrap">
      {arr.map((el, index) => {
        return <QuestionBox key={el.key} el={el} arr={arr} setArr={setArr} />;
      })}
    </div>
  );
}
