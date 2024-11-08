import React, { useContext, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';

const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    return (
        <div>
            text
        </div>
    )
}

export default MyOrders
