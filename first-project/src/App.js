import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent
          src="https://picsum.photos/200"
          alt="A Random Picture"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent name="Click here" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <ButtonComponent name="Don't click" />
        </div>
      </header>
    </div>
  );
}

export default App;
