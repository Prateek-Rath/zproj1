function manualstuff({ history }) {
  history.splice(0, 1);
  localStorage.setItem("history", history);
}

export default manualstuff;
