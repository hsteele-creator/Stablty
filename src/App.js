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
import Relationship from "./Components/Relationship";
import PositiveAttitude from "./Components/PositiveAttitude"
import StressManagement from "./Components/StressManagement"
import Coping from "./Components/Coping"
import Goals from "./Components/Goals"
import Gratitude from "./Components/Gratitude";

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
        <Route path="/goals" element={<Goals />} />
        <Route path="/stressmanagement" element={<StressManagement/>} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/positiveattitude" element={<PositiveAttitude />} />
        <Route path="/coping" element={<Coping />} />
        <Route path="/gratitude" element={<Gratitude />} />
      </Routes>
    </>
  );
}

export default App;
