import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Updated

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate(); // ✅ Updated

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/"); // ✅ Updated
            props.showAlert("Account Created Successfully","success");
        } else {
            props.showAlert("Invalid credentials","danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <form className="container mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter your name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter your email" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Enter your password" minLength={5} required />
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Re-enter your password" minLength={5} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Signup;
