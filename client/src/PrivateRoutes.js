import React, { useEffect,useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoutes() {
    const token = localStorage.getItem('token');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://gdfblog.onrender.com/api/user/verifyrole', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token })
                });
                const data = await response.json();
                console.log(data.decodedToken.isAdmin);
                setIsAdmin(data.decodedToken.isAdmin);
                setIsLoading(false);
                console.log(isAdmin);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    if (isLoading) {
        return <p>Caricamento...</p>;
    }

    return (
        isAdmin ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes;
