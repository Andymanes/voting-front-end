import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import House from './pages/House'
import Senate from './pages/Senate'
import Congress from './pages/Congress'
import Rep from './pages/Rep';
import StateHouse from './pages/StateHouse';
import StateSenate from './pages/StateSenate';

function App() {
 

  return (
    <Routes>
      <Route exact path='/' element={<Congress />} />
      <Route exact path='/senate' element={<Senate />} />
      <Route exact path='/house' element={<House />} />
      <Route exact path='/rep/:id' element={<Rep />} />
      <Route exact path='/senate/state/:id' element={<StateSenate />} />
      <Route exact path='/house/state/:id' element={<StateHouse />} />
    </Routes>
  );
}

export default App;
