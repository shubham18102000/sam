'use client'
import React , {useEffect , useState} from 'react';
const login = () =>

{
    const [message , setMessage] = useState('');
    useEffect(() =>
    {
        fetch('http://localhost:3003/login')
        .then((response) => response.text())
        .then((data) => setMessage(data));

    },[]);
    return (
    <div>
        <h1> this is logi page</h1>
        <h1>{message}</h1>
    </div>
      
        
    );
};

export default login;