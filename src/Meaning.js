import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong>
                {definition.definition}
                <br />
                <strong></strong>
          
                <div className="definition-example">{definition.example}</div>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
