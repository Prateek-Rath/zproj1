import { useContext } from "react";
import { AppContext } from "../context";
import "../index.css";
import "../App.css";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// import { useLocation } from "react-router-dom";
export default function Analysis(props) {
  const { history } = useContext(AppContext);
  // const location = useLocation();
  const entry = props.entry;
  const req = entry || history[history.length - 1];
  ChartJS.register(ArcElement, Tooltip, Legend);
  if (history.length === 0) return <h1>You have no attempt history present</h1>;
  if (history.length > 0)
    return (
      <div className="flex flex-row flex-wrap">
        <p className="font-bold text-blue-500">You finished the quiz!!!</p>
        <div className="h-40 w-40">
          <Pie
            data={{
              labels: ["Correct", "Unattempted", "Incorrect"],
              datasets: [
                {
                  label: "No of questions",
                  data: [
                    req.feedback.correct,
                    req.feedback.total - req.feedback.attempted,
                    req.feedback.incorrect,
                  ],
                  backgroundColor: [
                    "rgba(75, 192, 192, 0.2)", //green
                    "rgba(255, 206, 86, 0.2)", //yellow
                    "rgba(255, 99, 132, 0.2)", //red
                  ],
                  borderColor: [
                    "rgba(75, 192, 192, 1)", //green
                    "rgba(255, 206, 86, 1)", //yellow
                    "rgba(255, 99, 132, 1)", //red
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>

        <table className="m-2">
          <thead></thead>
          <tbody>
            <tr>
              <th> Question Number </th>
              <th> Your Response </th>
              <th> Correct Answer </th>
            </tr>
            {req.quiz.qa.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{req.your_responses[index]}</td>
                  <td>{el.answer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>You attempted this quiz on {req.date.toString()}</p>
      </div>
    );
  else return <h1>You have no attempt history</h1>;
}
