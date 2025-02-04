import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'

const ApiRequest = () => {
    const [Records, setRecords] = useState([])
    const [name, setName] = useState()


    const addResponse = async () => {
        try {
            const randomNumber = Math.floor(Math.random() * 34 + 1);

            const response = await axios.get(`https://swapi.dev/api/people/${randomNumber}/`)
            console.log("response", response.data);

            const newRecord = {
                name: response.data.name,
                height: response.data.height,
                mass: response.data.mass
            }
            if (!Records.some(record => record.name === newRecord.name)) {
                setRecords([...Records, newRecord])
            }


            // setRecords(response?.data);
            // setName(response?.data.name);

        }
        catch (error) {
            console.log(error)
        }
    }

    // addResponse();
    useEffect(() => {
        // addResponse()
    }, [])

    // console.log("Records", Records)
    // console.log("name", name)

    const deleteRecord = (name) => {
        setRecords(Records.filter(record => record.name !== name));
    }

    console.log("records", Records)

    return (
        <div className='main-container'>
            <button style={{ padding: '10px 20px' }} onClick={addResponse}>Add Record</button>
            <div className='table-main-container'>
                {Records.map((record, index) => {
                    return <div className='single-data'>
                        <p>{record.name}</p>
                        <p>{record.height}</p>
                        <button onClick={() => deleteRecord(record.name)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ApiRequest
