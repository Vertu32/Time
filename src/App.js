import React, { useEffect, useState } from "react";
import './styles/style.css'
import TimeList from "./components/TimeList";
import MyButton from './components/UI/MyButton'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Seconds from "./components/pages/Seconds";
import Timer from "./components/pages/Timer";
import Home from "./components/pages/Home";

function App() {


  return (
    <BrowserRouter>
      <div className="navbar">
        <Link to="/secondomer">
        <img src="https://img.icons8.com/material-outlined/80/000000/stopwatch.png"/>
        </Link>
        <Link to="/timer">
        <img src="https://img.icons8.com/ios-glyphs/80/000000/timer.png"/>
        </Link>
      </div>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/secondomer" element={<Seconds/>}/>
        <Route path="/timer" element={<Timer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
