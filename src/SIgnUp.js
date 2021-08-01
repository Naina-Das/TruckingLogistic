import { useState } from 'react';
import { auth } from "./firebase";
import { generateUserDocument } from "./firebase";
import {useHistory} from 'react-router-dom';
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
        if(checkIEmpty(data)) {
            notify();
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(data.email, data.password);
      generateUserDocument(user, {fullName: data.fullName});
      history.push("/");
        } 
        catch(error){
            toast.error(error.message);
        }
      
    }
  
    return (
        <div class ="login">
            <ToastContainer/>
            <img src={Quloi} style={{
                display: "block",
                margin: "0 auto"
            }}></img>
            <div className="login-container">
            <div style = {{color : "white", display : "flex" , justifyContent : "center"}} >Trucking Logistics Sign Up</div>

               
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