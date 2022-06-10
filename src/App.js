import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import House from './components/House'
import Senate from './components/Senate'


function App() {
 

  return (
    <Routes>
      <Route exact path='/senate' element={<Senate />} />
      <Route exact path='/house' element={<House />} />
      <Route exact path='/rep/:id' />
    </Routes>
  );
}

export default App;
