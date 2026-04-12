import React from 'react'

const OrderManagement = () => {
    const orders = [
        {
            id: 123,
            user: {
                name: "Jhon Doe"
            },
            totalprice: 120,
            status: "pending"
        }]

    const handleStatusChange = (orderId, newStatus) => {
        console.log("order id", orderId)
        console.log("new status", newStatus)
    }
    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold md-6'>Order Mangment</h2>
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <td className='py-3 px-4'>Order ID</td>
                            <td className='py-3 px-4'>Customer</td>
                            <td className='py-3 px-4'>Total Price</td>
                            <td className='py-3 px-4'>Status</td>
                            <td className='py-3 px-4'>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                    <td className='py-4 px-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {order.id}
                                    </td>
                                    <td className='p-4'>
                                        {order.user.name}
                                    </td>
                                    <td className='p-4'>
                                        {order.totalprice}
                                    </td>
                                    <td className='p-4'>
                                        <select value={order.status}
                                            onChange={(e) => { handleStatusChange(order.id, e.target.value) }}
                                            className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5'>
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className='p-4'>
                                        <button onClick={() => handleStatusChange(order.id, "Delivered")} className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>Mark as Delivered</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='p-4 text-center'>No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default OrderManagement