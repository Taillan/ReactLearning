import React from "react";
import ReactDOM from "react-dom/client";
import Comment from "./component/comment";
import "./index.css";

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

function App() {
  return (
    <Comment 
    date = {comment.date}
    text={comment.text}
    author={comment.author}/>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
