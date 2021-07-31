import { useState } from 'react';

const Login = () => {
    const loginFormData = {
        fullame: '',
        email: '',
        password: ''
    }
    const [data, setData] = useState(loginFormData);


    const handleChange = (event) => {
        setData(() => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }

  
    return (
        <div>
            <div className="login-container">
            <div style = {{color : "white", marginLeft : "150px"}}>Trucking Logistics</div>

               
                <div className="loginForm-container">
                    <input type="text" value={data.fullame} name="fullname" onChange={handleChange} placeholder="Enter Full Name"></input>
                    <input type="text" value={data.email} name="email" onChange={handleChange} placeholder="Enter Email Address"></input>
                    <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="Enter Password"></input>
                </div>
                <button type = "submit" >SEND MESSAGE</button>
           
            </div>
        </div>
    );

}

export default Login;