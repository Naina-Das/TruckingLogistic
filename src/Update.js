import { useState } from "react";
import { generateTruckDocument, getToken, onMessageListener, getTruckDocuments } from "./firebase";
import './Update.css';
import {useHistory} from 'react-router-dom'


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
    const [details, setDetails] = useState({ updateFormData });

    const handleChange = (event) => {
        setDetails(() => ({
            ...details,
            [event.target.name]: event.target.value
        }))
    }
     const handleSubmit =async ()=>{
         console.log("Identifier",{...details});
        await generateTruckDocument({...details})
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
           
            <div className="update-form">
                <h1>Trucking Logistics</h1>
                <hr></hr>
                <div className="all-feild-container">
                    <label for="first-Name" className="required" >Driver Name </label>
                    <div className="first-Row">

                        <input type="text" value={details.firstName} name = "firstName" onChange={handleChange} />
                        <input type="text" value={details.secondName} onChange={handleChange} name = "secondName" />

                    </div>

                    <label for="required" className="required" >Phone Number:</label>
                    <input type="text" placeholder="(000)000-0000" value={details.phone} name = "phone"  onChange={handleChange} />

                    <label for="required" className="required" >Company</label>
                    <input type="text" value={details.companyName} name = "company"  onChange={handleChange} />


                    <label for="required" className="required">Truck number Plate:</label>
                    <input type="text" style={{ width: "20%" }} value={details.numberPlate} name = "numberPlate" onChange={handleChange} />
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