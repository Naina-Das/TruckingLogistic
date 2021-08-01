import { useState } from 'react';
import { auth } from "./firebase";
import { generateUserDocument } from "./firebase";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const loginFormData = {
        fullName: '',
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
    const handleSubmit =async()=>{
      const {user} = await auth.createUserWithEmailAndPassword(data.email, data.password);
      generateUserDocument(user, {fullName: data.fullName});
      history.push("/");
        
    }
  
    return (
        <div>
            <div className="login-container">
            <div style = {{color : "white", marginLeft : "150px"}}>Trucking Logistics Sign Up</div>

               
                <div className="loginForm-container">
                <input type="text" value={data.firstName} name = "fullName" onChange={handleChange} placeholder ="Enter you full name" />
                    <input type="text" value={data.email} name="email" onChange={handleChange} placeholder="Enter Email Address"></input>
                    <input type="password" value={data.password} name="password" onChange={handleChange} placeholder="Enter Password"></input>
                </div>
                <button type="submit" onClick = {handleSubmit}> SIGN UP</button>
                <button type="submit" onClick={() => {history.push('/')}} style = {{marginTop:"20px"}}>SIGN IN</button>


                
           
            </div>
        </div>
    );

}

export default Login;