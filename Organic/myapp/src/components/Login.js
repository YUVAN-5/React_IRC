
import { Link } from "react-router-dom";
function Login(){
    return(
        <>
         <div class="container">
            <div class="form-box"> 
                <h1 id="title">Sign Up</h1>
                <form>
                    <div class="input-group">
                        <div class="input-field" id="NameField">
                            <input type="text" placeholder="Name" id="names"/>
                         </div></div>
                         <div class="input-group">
                            <div class="input-field" id="email">
                                <input type="email" placeholder="Email" id="emails"/>
                             </div></div>
                             
                             <div class="input-group">
                                <div class="input-field" id="password">
                                    <input type="Password" placeholder="Password" id="pass"/>
                                 </div></div>
                                 <div>
                            <p>Forget Password?<a href="#">click here!</a> </p>
                                </div>
                                <br/>
                             <div class="btn-field">
                                <button type="button" id="signupBtn" >Sign Up</button>
                                <button type="button"id="signinBtn"class="disable" ><Link to='/Signup'>Sign In</Link></button>
                             </div> 
                             
                             <button type="button"id="home"><a href="reacthome.html" id="home1">HOME</a></button>          
                </form>
                
            </div>
        </div>

        
        </>
    )
}
export default Login;