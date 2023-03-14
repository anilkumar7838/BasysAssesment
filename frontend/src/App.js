import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import WebFont from "webfontloader";
import PriorAuthorization from './components/PriorAuthorization/PriorAuthorization';
import Sidebar from './components/views/sidebar/sidebar';
import Claim from './components/Claims/Claim';
import ScoreCard from './components/ScoreCard/ScoreCard';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    });
  }, []);
  return (
    <div className="App">
     <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<PriorAuthorization/>} />
        <Route path="/claim" element={<Claim/>} />
        <Route path="/scorecard" element={<ScoreCard/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
