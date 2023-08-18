import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loggedin, setLoggedin] = useState(false);
  
  return (
    <div className="App">
      <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login loggedin={loggedin} setLoggedin={setLoggedin}/>} />
        <Route path='/signup' element={<Signup loggedin={loggedin} setLoggedin={setLoggedin}/>} />
        <Route path='/dashboard' element={
          <PrivateRoute loggedin={loggedin}>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
