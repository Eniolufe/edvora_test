import "./App.css";
import Navbar from "./components/Navbar";

import Homepage from "./components/Homepage";
import Upcoming from "./components/Upcoming";
import Nearest from "./components/Nearest";
import Title from "./components/Title";
import Past from "./components/Past";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Title />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nearest" element={<Nearest />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/past" element={<Past />} />
      </Routes>
    </>
  );
}

export default App;
