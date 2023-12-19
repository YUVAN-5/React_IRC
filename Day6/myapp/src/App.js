
// import './App.css';
// import './Nav.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       
        {/* <Nav/> */}
      
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<Nav/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
