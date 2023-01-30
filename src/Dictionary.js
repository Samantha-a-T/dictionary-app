import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setphotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setphotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelApiKey =
      "0d4utXldPoh8GVgrk3RlVAbhaJrjwHHPOOmr6HizLdWADBYrzEYKCxoU";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelApiUrl, { headers: { Authorization: `Bearer ${pexelApiKey}` } })
      .then(handlePexelResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="dictionary-search"
            placeholder="Lookup a word..."
            autoFocus
          />
        </form>
        <div className="dictionary-wrapper">
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
