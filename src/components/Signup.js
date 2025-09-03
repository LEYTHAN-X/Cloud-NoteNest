import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        if (password !== cpassword) {
            props.showAlert("Passwords do not match", "danger");
            return;
        }
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Account Created Successfully", "success");
        } else {
            props.showAlert(json.error || "Invalid details", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card p-4">
                    <div className="card-body">
                        <h2 className="text-center mb-4">Create a Note-Nest Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Choose a password" minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Re-enter your password" minLength={5} required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;