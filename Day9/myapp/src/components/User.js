
import{getuser,deluser} from '../services/API'
import {useState,useEffect} from 'react'
// import {getuser,deluser} from  '../services/API'
import {useNavigate} from 'react-router-dom'

const User=()=>{
    const navigate=useNavigate();
    const [user,setUser]=useState([]);

    const fetchdata=async()=>{
        try{
            const res=await getuser()
            setUser(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    
    const handleDelete=async(id)=> {
        try{
            const res=await deluser(id)
            if(res.status===200){
                alert('deleted')
            }
            fetchdata()
        }
        catch(e){
            console.log(e)
        }
    }

    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }

    console.log(user)

    const handleAdd=()=>{
        navigate('/add')
    }

    useEffect(()=>{
        fetchdata()
    },[])


    return(
        <>
            <table>
                <thead>
                    <tr> 
                        <th>username</th>
                        <th>password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user)=>(

                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button className="edit-btn">Edit</button>
                                </td>
                                <td>
                                    <button className="del-btn" onClick={()=>handleDelete(user.id)}>Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                    </tbody>
            </table>

            <button onClick={handleAdd}>Add</button>
        </>
    )
}
export default User;