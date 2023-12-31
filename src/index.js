import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
  // </React.StrictMode>
);

// window.onresize = function (event) {
//   if (window.innerHeight < 400 || window.innerWidth < 540) {
//     root.render(
//       <h1 className="flex flex-wrap">
//         You cannot view our page in such a small screen size, increase the size
//         to view the page properly
//       </h1>
//     );
//   } else
//     root.render(
//       // <React.StrictMode>
//       <AppProvider>
//         <App />
//       </AppProvider>
//       // </React.StrictMode>
//     );
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
