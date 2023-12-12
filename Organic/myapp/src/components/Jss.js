
import img2 from '../Assets/img/Logo1.webp';
import { Link } from 'react-router-dom';
function Jss(){
    return(
        <>
        <div className="foot"><marquee>Flat 60% Off!!Ends soon...Shop before u Worry!!..</marquee>
        </div><br/>
        <div className="navbar">
        <div className='logo'>
            <img src={img2} style={{height:'80%',width:'10%'}}/>
        </div>
                {/* <h1 className='logoname'>TASTE'S FRESH</h1> */}

            <div className='texts'>
                <li><Link to ='/'>HOME</Link></li>
                <li>CART</li>
                <li><Link to ='/Login'>LOGIN</Link></li>
                <li><Link to ='/Login'>PROFILE</Link></li>

            </div>
    </div>
    </>
    )
}
export default Jss;