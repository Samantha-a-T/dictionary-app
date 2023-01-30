import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="first-column-first-row">
          <h2 className="results-word">{props.results.word}</h2>
          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetic, index) {
              let phoneticData;
              if (props.results.phonetics[0]?.text) {
                phoneticData = phonetic;
              } else if (props.results.phonetics[1]?.text) {
                phoneticData = props.results.phonetics[1];
              } else {
                phoneticData = phonetic;
              }
              return (
                <div key={index}>
                  {index < 1 ? <Phonetic phonetic={phoneticData} /> : null}
                </div>
              );
            })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} id="meaning">
              <div>{index < 3 ? <Meaning meaning={meaning} /> : null}</div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
