
import { Link } from 'react-router-dom';
import img1 from '../Assets/img/homeimg.jpg';
function Dashhome()
{
    return(
        <>
        <div id="main-wrapper">
		<div className="foot"><marquee>Flat 60% Off!!Ends soon...Shop before u Worry!!..</marquee>
        </div><br/>
		<div className="navbar">
        {/* <div className='logo'>
            <img src={img2} style={{height:'80%',width:'10%'}}/>
        </div> */}
                <h1 className='logoname'>Grab@Organic</h1>

            <div className='texts'>
               <li>HOME</li>
                <li>CART</li>
                <Link to =''><li>LOGIN</li></Link>
                <Link to ='/'><li>LOGOUT</li></Link>

            </div>
    </div>
	{/* <div class="container">
		<div class="contrast-bg">
			
		</div>
	</div> */}

	<div className='image-container'>
            <div class="text-overlay">
            Authentic Organic Fruits & Vegetables</div>
            <img src={img1} style={{height:'70%',width:'100%'}}/>
     </div>
	
</div>

{/* <!-- Navigation-Element --> */}
<nav>
	<ul>
		<li><a href="#0">Home</a></li>
		<li><a href="#0">About</a></li>
		<li>
			<a href="#0">Clients</a>
			<ul>
				<li>
					<a href="#0">Burger King</a>
					<ul>
						<li><a href="#0">Project 1</a></li>
						<li><a href="#0">Project 2</a></li>
						<li><a href="#0">Project 3</a></li>
					</ul>
				</li>
				<li>
					<a href="#0">Southwest Airlines</a>
					<ul>
						<li><a href="#0">Project 1</a></li>
						<li><a href="#0">Project 2</a></li>
						<li><a href="#0">Project 3</a></li>
					</ul>
				</li>
				<li>
					<a href="#0">Levi Strauss</a>
					<ul>
						<li><a href="#0">Project 1</a></li>
						<li><a href="#0">Project 2</a></li>
						<li><a href="#0">Project 3</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<a href="#0">Services</a>
			<ul>
				<li>
					<a href="#0">Print Design</a>
					<ul>
						<li><a href="#0">Subservice 1</a></li>
						<li><a href="#0">Subservice 2</a></li>
						<li><a href="#0">Subservice 3</a></li>
					</ul>
				</li>
				<li>
					<a href="#0">Web Design</a>
					<ul>
						<li><a href="#0">Subservice 1</a></li>
						<li><a href="#0">Subservice 2</a></li>
						<li><a href="#0">Subservice 3</a></li>
					</ul>
				</li>
				<li>
					<a href="#0">Mobile App Development</a>
					<ul>
						<li><a href="#0">Subservice 1</a></li>
						<li><a href="#0">Subservice 2</a></li>
						<li><a href="#0">Subservice 3</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li><a href="#0">Contact</a></li>
	</ul>
</nav>
        </>
    )
}

export default Dashhome;