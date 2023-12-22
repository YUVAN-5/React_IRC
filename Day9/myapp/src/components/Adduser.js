import {useState,useEffect} from 'react'
import {adduser} from '../services/API'
import {useNavigate} from 'react-router-dom'
const Adduser=()=>{
    const navigate=useNavigate();
    const[data,setdata]=useState({
        username:'',
        password:''
    })


    

    const handleChange=(e)=>{
        setdata({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await adduser(data)
            if(res.status===201){
                alert('user added')
                navigate('/')
            }
        }
        catch(e){
            console.log(e)
        }
        console.log(data)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>  
                <input type='text' id='username' placeholder='username' onChange={handleChange}></input>
                <input type='text' id='password' placeholder='password' onChange={handleChange}></input>
                <button type='Submit' className='submit-btn'>Add</button>            
                </form>

        </>
    )
}
export default Adduser;