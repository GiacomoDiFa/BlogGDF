import React, { useEffect,useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
    const token = localStorage.getItem('token');
    const[isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user/verifyrole', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token })
                });
                const data = await response.json();
                setIsAdmin(data.decodedToken.isAdmin);

            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }
        , []);
    return (
        isAdmin ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes