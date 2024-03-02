import React, {useState} from "react"
import {useNavigate} from 'react-router-dom';
import "../App.css";
import AuthService from "../services/AuthService";

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const submitForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Email Format ı yanlış");
            return;
        }

        AuthService.register(email, password, username, (callback) => {
            if (callback) {
                navigate('/login')
            }
        })

    }

    return (<div style={{marginTop: "30px"}} className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="test" className="form-control" placeholder="Enter Username"
                               onChange={e => setUsername(e.target.value)}
                               id="username"/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                               onChange={e => setEmail(e.target.value)}
                               id="email"/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                               onChange={e => setPassword(e.target.value)}
                               id="pwd"/>
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                    <br/>
                    <label>I have an Account</label>
                    <button type="button" onClick={() => navigate("/login")}
                            className="btn btn-primary">Login
                    </button>
                </div>
            </div>
        </div>
    )
}