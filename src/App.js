import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary  defaultKeyword="sunset"/>
        </main>
        <footer> Coded by Samantha Thibault</footer>
      </div>
    </div>
  );
}

export default App;
