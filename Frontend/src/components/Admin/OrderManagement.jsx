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
        <div className='max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen'>

            <h2 className='text-2xl font-bold mb-8 text-gray-800'>
                Order Management
            </h2>

            <div className='overflow-x-auto bg-white shadow-md rounded-xl border'>

                <table className='min-w-full text-sm text-gray-600'>

                    <thead className='bg-gray-100 text-xs uppercase text-gray-600'>
                        <tr>
                            <td className='py-3 px-4 text-left'>Order ID</td>
                            <td className='py-3 px-4 text-left'>Customer</td>
                            <td className='py-3 px-4 text-left'>Total Price</td>
                            <td className='py-3 px-4 text-left'>Status</td>
                            <td className='py-3 px-4 text-left'>Actions</td>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className='border-b hover:bg-gray-50 transition'
                                >

                                    <td className='py-4 px-4 font-medium text-gray-800 whitespace-nowrap'>
                                        #{order.id}
                                    </td>

                                    <td className='p-4'>
                                        {order.user.name}
                                    </td>

                                    <td className='p-4 font-semibold text-gray-800'>
                                        ₹{order.totalprice}
                                    </td>

                                    <td className='p-4'>
                                        <select
                                            value={order.status}
                                            onChange={(e) => { handleStatusChange(order.id, e.target.value) }}
                                            className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-2 focus:ring-[#b8860b] focus:outline-none p-2'
                                        >
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>

                                    <td className='p-4'>
                                        <button
                                            onClick={() => handleStatusChange(order.id, "Delivered")}
                                            className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition text-sm'
                                        >
                                            Mark as Delivered
                                        </button>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='p-6 text-center text-gray-500'>
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default OrderManagement