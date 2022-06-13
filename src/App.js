import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import House from './pages/House'
import Senate from './pages/Senate'
import Home from './pages/Home'
import Rep from './pages/Rep';
import StateHouse from './pages/StateHouse';
import StateSenate from './pages/StateSenate';
import Test from './pages/Test';
import BigTest from './pages/BigTest';
import SenateBills from './pages/SenateBills';

function App() {
 

  return (
    <Routes>

      <Route exact path='/' element={<Home />} />
      <Route exact path='/senate' element={<Senate />} />
      <Route exact path='/house' element={<House />} />
      <Route exact path='/rep/:id' element={<Rep />} />
      <Route exact path='/senate/state/:id' element={<StateSenate />} />
      <Route exact path='/house/state/:id' element={<StateHouse />} />
      <Route exact path='/senate/bills' element={<SenateBills />} />
      <Route exact path='/test' element={<Test />} />
      <Route exact path='/bigtest' element={<BigTest />} />
    </Routes>
  );
}

export default App;
