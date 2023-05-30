import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Header from './component/Header';

function App() {
 return (
  <>
  <Header/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>} />
    <Route/>
  </Routes> 
 </>
 )
}

export default App;
