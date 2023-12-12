import {useState} from "react";

const Spreadop =()=>{
    const[data,setdata]=useState({ username:'',password:''})


const handlechange=(e)=>{
    setdata({...data,[e.target.id]:e.target.value})
    console.log(data)
}

const handlesubmit=(e)=>{
    e.preventDefault()
    console.log("final data")
    console.log(data)
}

return(
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" placeholder="username" id="username" onchange={handlechange}/>
        <input type="password" placeholder="password" id="password" onchange={handlechange}/>
        <input type="submit" value='login'/>
    </form>
    </>
)
}
export default Spreadop;
