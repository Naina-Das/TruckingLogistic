import { useState } from "react";
import { generateTruckDocument, getToken, onMessageListener, getTruckDocuments } from "./firebase";
import './Update.css';
import {useHistory} from 'react-router-dom';
import Quloi from './Assets/1.png';
import { ToastContainer, toast } from 'react-toastify';

import { checkIEmpty } from "./Utils";
const notify = () => toast("All ield are mandatory", {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

const Update = () => {
    const history = useHistory();
    const [token, setTokenFound] = useState('');
    getToken(setTokenFound);
    
    const updateFormData = {
        firstName: '',
        secondName: '',
        phone: '',
        companyName: '',
        numberPlate: ''
    }
    const [details, setDetails] = useState({});

    const handleChange = (event) => {
        setDetails(() => ({
            ...details,
            [event.target.name]: event.target.value
        }))
    }

     const handleSubmit =async ()=>{
         console.log("Detail", details);
        if(checkIEmpty(details)){
            notify();
            return
        } 
        await generateTruckDocument(details)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAAlwnSNk8:APA91bHSqoSiVsv61ubYLTuAAm8sxTLsM5PRsNYUcFOwCf-uo5w-EGmk4cPTdFHlK5vkqEvrT4lWjWFWpTYL43STO71Vnyyc9XC_HJS_CMvaKOTIDzmcIhfFUQ_cY7Ye5o9QzoTB2_i0'},
            body: JSON.stringify({
                data: {
                    title: 'Saved Driver and Truck Information'
                },
                to: token
            })
        }
        const {payload} = fetch(`https://fcm.googleapis.com/fcm/send`, requestOptions);
        history.push("/truck-list");
        
    }
    return (
        <div className="update-container">
             <ToastContainer />
             <img src={Quloi} style={{
                display: "block",
                margin: "0 auto"
            }}></img>

           
            <div className="update-form">
                <h3 style ={{display : "flex" , justifyContent: "center"}}>Add Truck and Driver Information</h3>
                <hr></hr>
                <div className="all-feild-container">
                    <label for="first-Name" className="required" >Driver Name </label>
                    <div className="first-Row">

                        <input type="text" value={details.firstName} placeholder="First name" name = "firstName" onChange={handleChange} />
                        <input type="text" value={details.secondName} placeholder="Second name"  onChange={handleChange} name = "secondName" />

                    </div>

                    <label for="required" className="required" >Phone Number:</label>
                    <input type="text" placeholder="(000)000-0000" value={details.phone} name = "phone"  onChange={handleChange} />

                    <label for="required" className="required" >Company</label>
                    <input type="text" value={details.companyName} placeholder="Company name"  name = "company"  onChange={handleChange} />


                    <label for="required" className="required">Truck number Plate:</label>
                    <input type="text" style={{ width: "40%" }} placeholder="Number Plate"  value={details.numberPlate} name = "numberPlate" onChange={handleChange} />
                </div>
                <hr></hr>
                <div className="submit-button">
                    <button type="submit" onClick = {handleSubmit}>SUBMIT</button>
                </div>
               






            </div>



        </div>
    );
}





export default Update;