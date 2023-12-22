import React from 'react'
import {Routes,Route} from 'react-router-dom';
import User from './components/User'
import Adduser from './components/Adduser'
import Edituser from './components/Edituser'
import './assets/core.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/edit/:id' element={<Edituser/>}/>
      </Routes>
    </>
  );
}

export default App;
