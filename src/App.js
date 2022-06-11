import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import House from './components/House'
import Senate from './components/Senate'
import Congress from './components/Congress'
import Rep from './components/Rep';
import State from './components/State';

function App() {
 

  return (
    <Routes>
      <Route exact path='/' element={<Congress />} />
      <Route exact path='/senate' element={<Senate />} />
      <Route exact path='/house' element={<House />} />
      <Route exact path='/rep/:id' element={<Rep />} />
      <Route exact path='/state/:id' element={<State />} />
    </Routes>
  );
}

export default App;
