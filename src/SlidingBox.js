// import { useState } from "react";
import QuestionBox from "./QuestionBox";
export default function SlidingBox({ arr }) {
  // const [ad, setAd] = useState(0);
  // const ads = [];
  return (
    <div className="container">
      {arr.map((el, index) => {
        return <QuestionBox />;
      })}
    </div>
  );
}
