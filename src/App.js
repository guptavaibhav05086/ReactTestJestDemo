import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

function App() {
  return (
    <div className="App">
      <CommentBox></CommentBox>
      <CommentList></CommentList>
    </div>
  );
}

export default App;
