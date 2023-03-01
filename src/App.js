import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./Components/Nav";
import Home from "./Components/Home";
import Help from "./Components/Help";
import Feeling from "./Components/Feeling";
import Anxiety from "./Components/Anxiety";
import Depression from "./Components/Depression";
import Stress from "./Components/Stress";
import Lonely from "./Components/Lonely";
import Sadness from "./Components/Sadness";
import Anger from "./Components/Anger";
import Fear from "./Components/Fear";
import Helpless from "./Components/Helpless";
import Jealous from "./Components/Jealous";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/emotions" element={<Feeling />} />
        <Route path="/depression" element={<Depression />} />
        <Route path="/anxiety" element={<Anxiety />} />
        <Route path="/stress" element={<Stress />} />
        <Route path="/lonely" element={<Lonely />} />
        <Route path="/sadness" element={<Sadness />} />
        <Route path="/anger" element={<Anger />} />
        <Route path="/fear" element={<Fear />} />
        <Route path="/jealous" element={<Jealous />} />
        <Route path="/helpless" element={<Helpless />} />
      </Routes>
    </>
  );
}

export default App;
