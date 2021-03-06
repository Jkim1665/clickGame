import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="col-3">
      <div className="card" onClick={() => props.clickedImage(props.id)}  >
        <img className="img-fluid" alt={props.name} src={require("../../images/" + props.image)} />
      </div>
    </div>
  );
}

export default ImageCard;
