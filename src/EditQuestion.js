import { useState } from "react";
export default function EditQuestion({ el, setShow, arr, setArr }) {
  const [question, setQuestion] = useState(el.question);
  const [answer, setAnswer] = useState(el.answer);
  function handleSubmit(e) {
    console.log("submitted");
    e.preventDefault();
    let newarr = arr.map((piece) => {
      if (piece.key === el.key) {
        console.log("equality");
        piece.question = question;
        piece.answer = answer;
        return piece;
      } else {
        return piece;
      }
    });
    setArr(newarr);
  }
  return (
    <div className="modal bg-red-500">
      <p>THIS IS THE EDIT QUESTION MODAL</p>
      <div className="flex-row">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="question">QUESTION</label>
          <br></br>
          <input
            type="text"
            name="question1"
            id="question1"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
            // placeholder={question}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="answer">ANSWER</label>
          <br></br>
          <input
            name="answer1"
            id="answer1"
            type="text"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            // placeholder={answer}
          ></input>
          <br></br>
          <div className="flex flex-row justify-between">
            <button
              type="button"
              className="bg-blue-500"
              onClick={() => setShow(false)}
            >
              CLOSE
            </button>
            <button type="submit" className="bg-purple-500">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
