import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {

    const [data, setData] = useState()

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        try {
            const response = await axios.get('https://669e94c29a1bda36800706af.mockapi.io/crud/crud')
            setData(response.data)
        } catch {
            console.log("data not fetched");
        }
    }

    return (
        <>
            {data && <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.email} {item.password}</li>
                ))}
            </ul>}
        </>
    )
}

export default Read