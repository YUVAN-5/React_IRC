import React from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { getuserid,edituser} from '../services/API';

const Edituser=()=>{

    const {id}=useParams();
    console.log(id)
    const navigate=useNavigate()
    const[data,setdata]=useState({
        username:'',
        password:''
    })

    const fetchdata=async()=>{
        try{
            const res=await getuserid(id)
                setdata(res.data)
        }
        catch(e){
            console.log(e)
        }
    }

    const handleChange=(e)=>{
        setdata({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res2=await edituser(id,data)
            console.log(res2.status)
            if(res2.status===200){
                alert('user updated')
                navigate('/')
            }
        }
        catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchdata()
    },[])

    console.log(data)

    return(
        <form onSubmit={handleSubmit}>  
        <input type='text' id='username' placeholder='username' onChange={handleChange}></input>
        <input type='text' id='password' placeholder='password' onChange={handleChange}></input>
        <button type='Submit' className='submit-btn'>Edit</button>            
        </form>

    )
}
export default Edituser;