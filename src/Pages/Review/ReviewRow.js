import React, { useEffect, useState } from 'react';

const OrderRow = ({ review, handleDelete }) => {
    const { _id, serviceName, message, customer, price, service,  } = review;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://learn-code-server-lovat.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{message}</td>
            <th>
                <button 
                
                className="btn btn-ghost btn-xs">?</button>
            </th>
        </tr>
    );
};

export default OrderRow;