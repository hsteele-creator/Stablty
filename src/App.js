import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
