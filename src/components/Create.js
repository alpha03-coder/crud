import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history=useNavigate();


    const submitForm=(e)=>{
        e.preventDefault();
        console.log('clicked');
        console.log(email,password);
        if(!email || !password){
            alert("Enter email or password")
        }else{
            axios.post('https://669e94c29a1bda36800706af.mockapi.io/crud/crud',{email:email,password:password})
            history('/read')
            setEmail("")
            setPassword("")
            console.log("data sved");
        }
    }

    return <>
        <form style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h2>Create CRUD</h2>
            <div className="mb-3" style={{ width: "18rem" }}>
                <label className="form-label">Email address</label>
                <input type="email" onChange={(e)=>(setEmail(e.target.value))} className="form-control" />
            </div>
            <div className="mb-3" style={{ width: "18rem" }}>
                <label className="form-label">Password</label>
                <input type="password" onChange={(e)=>(setPassword(e.target.value))}  className="form-control"  />
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
        </form>
    </>
}

export default Create