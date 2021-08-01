import { useState } from "react";

const Update = () => {
    const updateFormData = {
        firstName: '',
        secondName: '',
        phone: '',
        companyname: '',
        numberPlate: ''
    }
    const [details, setDetails] = useState({ updateFormData });

    const handleChange = (event) => {
        setDetails(() => ({
            ...details,
            [event.target.name]: event.target.value
        }))
    }
     const handleSubmit =()=>{
        alert(`
        FirstName: ${details.firstName},
        SecondName: ${details.secondName},
        PhoneName: ${details.phone},
        CompanyName: ${details.companyname},
        NumberPlate: ${details.numberPlate}`);
       
        
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
                    <input type="text" value={details.companyname} name = "company"  onChange={handleChange} />


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