import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./Components/Nav";
import Home from "./Components/Home";
import Help from "./Components/Help";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
