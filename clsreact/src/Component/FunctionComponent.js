import React, { useState, useEffect } from 'react'
import axios from 'axios';

function FunctionComponent() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/rtmandal', { withCredentials: true })
            .then(response => {
                setData(response.data); 
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <label>Select Mandal</label>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">Select an option</option>
                {data.map((item, index) => (
                    <option key={index} value={item.mcode}>
                        {item.mname} 
                    </option>
                ))}
            </select>
        </div>
    );

}

export default FunctionComponent
