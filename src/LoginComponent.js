import { useState } from 'react';

const Login = () => {
    const loginFormData = {
        fullName: '',
        email: '',
        password: ''
    }
    const [data, setData] = useState({  fullName: '',
    email: '',
    password: ''});


    const handleChange = (event) => {
        setData(() => ({
            ...data,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit =()=>{
        alert(`${data.fullName} has signed in
       `);
       
        
    }
  
    return (
        <div>
            <div className="login-container">
            <div style = {{color : "white", marginLeft : "150px"}}>Trucking Logistics</div>

               
                <div className="loginForm-container">
                <input type="text" value={data.firstName} name = "fullName" onChange={handleChange} placeholder ="Enter you full name" />
                    <input type="text" value={data.email} name="email" onChange={handleChange} placeholder="Enter Email Address"></input>
                    <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="Enter Password"></input>
                </div>
                <button type="submit" onClick = {handleSubmit}>SIGN IN</button>

                
           
            </div>
        </div>
    );

}

export default Login;