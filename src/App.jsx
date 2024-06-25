import Dashboard from './components/Dashboard'
import Bookings from './components/Bookings'
import Concierge from './components/Concierge'
import Guest from './components/Guest'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Room from './components/Room'
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
<div className="App">
<Router>
  <Header/>
        <Routes>
        <Route exact path="/"  element={<Dashboard />} />
            <Route path="Concierge" element={<Concierge/>} />
            <Route path="Bookings" element={<Bookings/>} />
            <Route path="Guest" element={<Guest/>} />
            <Route path="LoginForm" element={<LoginForm/>} />
            <Route path="Room" element={<Room/>} />
        </Routes>

    </Router>
</div>



  )
}

export default App
