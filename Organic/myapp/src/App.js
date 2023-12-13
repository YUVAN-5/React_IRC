
import Shop from './components/Shop.js';
import Orgahome from './components/Orgahome.js';
import Jss from './components/Jss.js';
import Login from './components/Login.js';
import './Assets/css/Home.css';
import './Assets/css/Shop.css';
import './Assets/css/Navo.css';
import './Assets/css/login.css';
// import './Assets/css/overlay.css';

import {Route,Routes} from 'react-router-dom';
import Signup from './components/Signup.js';

function App() {
  return (
      <>
      <Jss/>
      <Orgahome/>
      <Routes>
      {/* <Route path='/' element={<Orgahome/>}/> */}
      <Route path='' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>

      </Routes>
      <Shop/>
      </>
  );
}

export default App;
