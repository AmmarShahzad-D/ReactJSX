//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>Hello World</h1>
    <ul>
      <li>first</li>
      <li>second</li>
      <li>third</li>
    </ul>
  </>,
  document.getElementById("root")
);
