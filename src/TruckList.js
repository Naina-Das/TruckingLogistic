import { useState, useEffect } from "react";
import { getTruckDocuments, onMessageListener } from "./firebase";
import './TruckList.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
const notify = (payload) => toast(payload.data.title, {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
export const TruckList = () => {
    const history = useHistory();
    onMessageListener().then(payload => {
        notify(payload);
 
     }).catch(err => console.log('failed: ', err));
    const [trucks, setTrucks] = useState([])
    useEffect(() => {
        async function fetchTruck() {
            const result = await getTruckDocuments();
            console.log("Result", result);
            setTrucks(result);


        }
        fetchTruck();

    }, [])
    return (
        <div className="list-container">
             <ToastContainer />
            <div className="button-container">
                <div>
                    Truck List
                </div>
                <div>
                <button type="submit" style ={{width: "50%"}} onClick={() => {history.push('/truck')}}> Create Truck</button>

                </div>


            </div>
            <table>
                <tr>
                    <th>Driver Name</th>
                    <th>Truck Company Name</th>
                    <th>Phone Number</th>
                    <th>Truck Number Plate</th>

                </tr>
                {trucks.map((truck, index) => {
                    return (
                        <tr key={index}>
                            <td>{truck.firstName} {truck.secondName}</td>
                            <td>{truck.company}</td>
                            <td>{truck.phone}</td>
                            <td>{truck.numberPlate}</td>
                        </tr>
                    );
                })}

            </table>
        </div>
    );
}