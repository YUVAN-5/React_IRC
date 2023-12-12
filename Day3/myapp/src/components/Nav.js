
import img2 from '../Assests/img/halloweenlogo.jpg';
function Nav(){
    return(
        <div className="navbar">
            <div className='logo'>
                <img src={img2} style={{height:'80%',width:'10%'}}/>
            </div>
                    <h1 className='logoname'>HALLOWEEEN </h1>

                <div className='texts'>
                    <h1>HOME</h1>
                    <h1>DEALS</h1>
                    <h1>CART</h1>
                </div>
        </div>
       
            
    )
}
export default Nav;