
import Shop from './components/Shop.js';
// import Orgahome from './components/Orgahome.js';
// import Jss from './components/Jss.js';
import Login from './components/Login.js';
import './Assets/css/Home.css';
import './Assets/css/Shop.css';
import './Assets/css/Navo.css';
import './Assets/css/login.css';
// // import './Assets/css/shopnow.css';
// // import Shopnow from './components/Shopnow.js';
import {Route,Routes} from 'react-router-dom';
import Signup from './components/Signup.js';
// // import Tooltip from './components/Tooltip.js';
import './Assets/css/dashhome.css';
import Dashhome from './components/Dashhome.js';
// import './Assets/css/Carousel.css';
// import Carousel from './components/Carousel.js';

function App() {
  return (
      <>
      <Dashhome/>
      {/* <Jss/> */}
      {/* <Orgahome/> */}
      <Routes> 
      {/* <Route path='/' element={<Orgahome/>}/> */}
      {/* {/* <Route path='/' element={<Dashhome/>}/> */}
      <Route path='' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>

  </Routes>
      <Shop/> 
      

      {/* <Shopnow/> */}
      {/* <Tooltip/> */}
      {/* <Carousel/> */}
      </>
  );
}




export default App;