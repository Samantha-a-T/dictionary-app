import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h2 className="phonetic-text"> {props.phonetic.text}</h2>
      <div className="audio-player">
        <ReactAudioPlayer src={props.phonetic.audio} autoPlay controls />{" "}
      </div>
    </div>
  );
}
