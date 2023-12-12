
import { Link } from "react-router-dom";
function Signup(){
    return(
        <>
             <div class="container">
            <div class="form-box"> 
                <h1 id="title">SignIn</h1>
                <form>
                   
                         <div class="input-group">
                            <div class="input-field" id="email">
                                <input type="email" placeholder="Email" id="emails"/>
                             </div></div>
                             
                             <div class="input-group">
                                <div class="input-field" id="password">
                                    <input type="Password" placeholder="Password" id="pass"/>
                                 </div></div>
                                 
                                <br/>
                             <div class="btn-field">
                                <button type="button" id="signupBtn" >Sign Up</button>
                                <button type="button"id="signinBtn"class="disable" >SignIn</button>
                             </div> 
                             
                             <button type="button"id="home"><a href="reacthome.html" id="home1">HOME</a></button>          
                </form>
                
            </div>
        </div>

        </>
    )
}
export default Signup;