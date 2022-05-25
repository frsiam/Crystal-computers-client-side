import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div className='h-[calc(100vh-200px)]'>
            <h1>Here is the purchase section: {id}</h1>
        </div>
    );
};

export default Purchase;