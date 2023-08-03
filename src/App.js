// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Team from "./Team";
import Project from "./Projects";
// import { useState } from "react";

function App() {
  // const [val, setVal] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/calendar" element={<h1>Cal</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
