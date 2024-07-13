import React from "react";
import "./Display.css";
export default function Display(props) {
  function onMe() {
    props.deleteMe();
  }
  return (
    <div className="movieAlign">
      <div>
        <img
          src={props.value.url}
          height="300"
          width="300"
          alt={props.value.movie}
        />
      </div>
      <div style={{ width: 500 }}>
        <div style={{ display: "flex" }}>
          <p style={{ textAlign: "left", width: 150, fontWeight: "900" }}>
            Movie id
          </p>
          <p style={{ fontWeight: "600" }}>: {props.value._id}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ textAlign: "left", width: 150, fontWeight: "900" }}>
            Movie Name
          </p>
          <p style={{ fontWeight: "600" }}>: {props.value.movie}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ textAlign: "left", width: 150, fontWeight: "900" }}>
            Movie Year
          </p>
          <p style={{ fontWeight: "600" }}>: {props.value.year}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ textAlign: "left", width: 150, fontWeight: "900" }}>
            Genre
          </p>
          <p style={{ fontWeight: "600" }}>: {props.value.Genre}</p>
        </div>
        <div className="buttonAlign">
          <button className="buttons" onClick={onMe}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
