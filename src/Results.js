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
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
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
