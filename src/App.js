// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./QuizPage";
import Team from "./Team";
import Project from "./Projects";
import QuestionView from "./QuestionView";
import Home from "./Home";
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
        <Route path="/results" element={<h1>Project</h1>}></Route>
        <Route path="/about" element={<Team />}></Route>
        <Route path="/about" element={<h1>Cal</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
