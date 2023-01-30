import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          <a
            href="https://github.com/Samantha-a-T/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://samantha-thibault.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            
            Samantha Thibault
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
