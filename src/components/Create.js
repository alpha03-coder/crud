import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { showCreateToast,showErrorToast } from './Toast';
import './Create.css';


const Create = () => {

    const [contactNo, setcontactNo] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const history = useNavigate();


    const submitForm = (e) => {
        e.preventDefault();
        console.log('clicked');
        console.log(email, contactNo);
        if (!email || !contactNo) {
            showErrorToast("Please Enter Deatils !")
        } else {
            axios.post('https://669e94c29a1bda36800706af.mockapi.io/crud/crud', { first:firstName,last:lastName,email: email, contactNo: contactNo })
            history('/read')
            setFirstName("")
            setLastName("")
            setEmail("")
            setcontactNo("")
            showCreateToast("User Created Successfully")
        }
    }

    return <>
        <div className='form'>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className='form-body'>
                <h2 className='heading-2 mt-5 mb-4'>Add Employee</h2>
                <div className="mb-3" style={{ width: "18rem" }}>
                    <label className="form-label">First Name</label>
                    <input type="email" onChange={(e) => (setFirstName(e.target.value))} className="form-control" />
                </div>
                <div className="mb-3" style={{ width: "18rem" }}>
                    <label className="form-label">Last Name</label>
                    <input type="email" onChange={(e) => (setLastName(e.target.value))} className="form-control" />
                </div>
                <div className="mb-3" style={{ width: "18rem" }}>
                    <label className="form-label">Email address</label>
                    <input type="email" onChange={(e) => (setEmail(e.target.value))} className="form-control" />
                </div>
                <div className="mb-3" style={{ width: "18rem" }}>
                    <label className="form-label">Contact No.</label>
                    <input type="number" onChange={(e) => (setcontactNo(e.target.value))} className="form-control" />
                </div>
                <button type="submit" onClick={submitForm} className="btn btn-primary mt-3 ">Submit</button>
            </form>
        </div>
    </>
}

export default Create