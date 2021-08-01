import { useState } from 'react';
import { auth } from "./firebase";
import { useHistory } from 'react-router-dom';

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
        auth.signInWithEmailAndPassword(data.email, data.password).then(result => {
            history.push("/truck");
        }).catch(error => {
            // setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
        // getUserDocument

    }

    return (
        <div>
            <div className="login-container">
                <div style={{ color: "white", marginLeft: "150px" }}>Trucking Logistics Sign In</div>


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