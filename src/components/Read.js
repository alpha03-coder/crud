import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Read = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://669e94c29a1bda36800706af.mockapi.io/crud/crud');
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log('Data not fetched', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    return (
        <>

            <div >
                {loading ? (
                    <Box sx={{ display: 'flex' }} style={{position:"relative",display:"flex", justifyContent:"center",alignItems:"center",top:"4rem"}}>
                        <CircularProgress />
                    </Box>
                ) : data.length === 0 ? (
                    <p>No data available</p>
                ) : (
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S No.</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button className='btn btn-success'>Edit</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default Read