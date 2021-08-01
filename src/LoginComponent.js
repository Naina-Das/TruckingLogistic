import { useState } from 'react';
import { auth } from "./firebase";
import { useHistory } from 'react-router-dom';
import Quloi from './Assets/1.png';
import { ToastContainer, toast } from 'react-toastify';

import { checkIEmpty } from "./Utils";
const notify = () => toast.error("All field are mandatory", {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


const Login = () => {
    const history = useHistory();
    const loginFormData = {

        email: '',
        password: ''
    }
    const [data, setData] = useState({

        email: '',
        password: ''
    });


    const handleChange = (event) => {
        setData(() => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = () => {
        if(checkIEmpty(data)) {
            notify();
            return;
        }
        auth.signInWithEmailAndPassword(data.email, data.password).then(result => {
            history.push("/truck");
        }).catch(error => {
            // setError("Error signing in with password and email!");
            toast.error("Invalid credentials");
        });
        // getUserDocument

    }

    return (
        <div className="login">
            <ToastContainer/>
            <img src={Quloi} style={{
                display: "block",
                margin: "0 auto"
            }}></img>
            <div className="login-container">

                <div style={{ color: "white", display: "flex" , justifyContent: "center" }}>Trucking Logistics Sign In</div>


                <div className="loginForm-container">
                    <input type="text" value={data.email} name="email" onChange={handleChange} placeholder="Enter Email Address"></input>
                    <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="Enter Password"></input>
                </div>
                <button type="submit" onClick={handleSubmit}>SIGN IN</button>
                <button type="submit" onClick={() => { history.push('/signup') }}
                    style={{ marginTop: "20px" }}>SIGN UP</button>




            </div>
        </div>
    );

}

export default Login;