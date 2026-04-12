import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MyOrder = () => {
    const [order, setOrder] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            const mockorders = [
                {
                    id: 1,
                    date: new Date(),
                    shippingAddress: "123 Main St, USA",
                    orderItems: [
                        {
                            name: "Gold Ring",
                            Image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
                        },
                    ],
                    totalPrice: 5000,
                    isPaid: true
                },
                {
                    id: 2,
                    date: new Date(),
                    shippingAddress: "123 Main St, USA",
                    orderItems: [
                        {
                            name: "Gold Ring",
                            Image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
                        },
                    ],
                    totalPrice: 5000,
                    isPaid: true
                }
            ]
            setOrder(mockorders)
        }, 1000)
    }, [])

    const handleRowClick = (orderId) => {
        navigate(`/order/${orderId}`)
    }
    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>

            <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
                <table className='min-w-full text-left text-gray-500'>

                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <th className='py-2 px-4'>Image</th>
                            <th className='py-2 px-4'>Order ID</th>
                            <th className='py-2 px-4'>Date</th>
                            <th className='py-2 px-4'>Address</th>
                            <th className='py-2 px-4'>Items</th>
                            <th className='py-2 px-4'>Price</th>
                            <th className='py-2 px-4'>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {order.length > 0 ? (
                            order.map((order) => (
                                <tr key={order.id} className='border-b hover:bg-gray-50' onClick={() => handleRowClick(order.id)}>

                                    <td className='py-3 px-4'>
                                        <img
                                            src={order.orderItems[0].Image}
                                            alt=""
                                            className='w-12 h-12 object-cover rounded'
                                        />
                                    </td>

                                    <td className='py-3 px-4 font-medium text-gray-900'>
                                        {order.id}
                                    </td>

                                    <td className='py-3 px-4'>
                                        {new Date(order.date).toLocaleDateString()}
                                    </td>

                                    <td className='py-3 px-4'>
                                        {order.shippingAddress}
                                    </td>

                                    <td className='py-3 px-4'>
                                        {order.orderItems.length}
                                    </td>

                                    <td className='py-3 px-4'>
                                        ₹{order.totalPrice}
                                    </td>

                                    <td className='py-3 px-4'>
                                        <span className={`px-2 py-1 rounded text-xs ${order.isPaid
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}>
                                            {order.isPaid ? "Paid" : "Pending"}
                                        </span>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className='py-4 text-center'>
                                    No Orders Found
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyOrder
