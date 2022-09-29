import "./assets/styles/App.css";
import Main from "./components/MainContent";

function App() {
  return (
    <div className="select-none bg-black text-white">
      <div className="blob top-8 left-8 fixed"></div>
      <div className="blob2 right-14 bottom-8 fixed"></div>
      <div className="sticky">
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
