// import { useContext } from "react";
import React from "react";
import { useState } from "react";

const AppContext = React.createContext();

function getfromlocal(str1) {
  let items = localStorage.getItem(str1);
  if (items) {
    return JSON.parse(items);
  } else return [];
}
const AppProvider = ({ children }) => {
  const [quizlist, setQuizlist] = useState(getfromlocal("quizlist"));
  const [open, setOpen] = useState(false);
  //   console.log(
  // "b4 we send this stuff to other components, quizlist is: ",
  // quizlist
  //   );
  return (
    <AppContext.Provider value={{ quizlist, setQuizlist, open, setOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
