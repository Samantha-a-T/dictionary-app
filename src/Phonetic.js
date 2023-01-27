import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
   
      <h2 className="phonetic-text"> {props.phonetic[0].text}</h2>
      <a href={props.phonetic[0].audio} target="_blank" rel="noreferrer">
        Listen here
      </a>
    </div>
  );
}
