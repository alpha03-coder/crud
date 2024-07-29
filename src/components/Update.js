import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Update = () => {
    const [id, setid] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    useEffect(() => {
      setid(localStorage.getItem("id"))
      setEmail(localStorage.getItem("email"))
      setPassword(localStorage.getItem("password"))
    }, [])

    const handleUpdate =(e)=>{
        e.preventDefault()
        axios.put(`https://669e94c29a1bda36800706af.mockapi.io/crud/crud/${id}`,{email:email,password:password}).then(()=>{
            navigate("/read")
        })
    }
    


    return (
        <div>
            <form key={id}>
                <div className="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp" value={email} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit" onClick={handleUpdate} className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Update