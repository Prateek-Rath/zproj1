// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./QuizPage";
import Team from "./Team";
import Project from "./Projects";
import QuestionView from "./QuestionView";
import Home from "./Home";
import Start from "./Attempt/Start";
import AttemptPage from "./Attempt/AttemptPage";
import Analysis from "./Attempt/Finish";
import Results from "./Attempt/Results";
// import { useState } from "react";

function App() {
  // const [val, setVal] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edit/:id" element={<DashBoard />}></Route>
        <Route path="/view/:name/:qno" element={<QuestionView />}></Route>
        <Route path="/quiz" element={<Project />}></Route>
        <Route path="/quiz/edit/:id" element={<DashBoard />}></Route>
        <Route path="/quiz/attempt/:id" element={<Start />}></Route>
        <Route
          path="/quiz/attempt/:quizid/:questionid"
          element={<AttemptPage />}
        ></Route>
        <Route path="/results" element={<Results />}></Route>
        <Route path="/results/finish/:quizname" element={<Analysis />}></Route>
        <Route
          path="/results/details/:historyid"
          element={<Analysis />}
        ></Route>
        <Route path="/about" element={<Team />}></Route>
        <Route path="/about" element={<h1>Cal</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
