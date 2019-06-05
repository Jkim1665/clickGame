import React from "react";
import "./style.css";

function Jumbotron(props) {
  return <div className="container-full-bg text-light">
    <div className="jumbotron">
      <div className="container text-center">
        <h2>How to Play:</h2>
        <h3> Click any image to generate your score! The purpose of this game is to click on a picture and reach the target without going over the goal!</h3>
      </div>
    </div>
  </div>

}

export default Jumbotron;
