import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {
    const orders = [
        {
            id: 123123,
            user:
                { name: "jhon Deo", },
            totalprice: 120,
            status: "processing",
        },

    ]
    return (
        <div className='max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen'>

            <h1 className='text-2xl font-bold mb-8 text-gray-800'>
                Admin Dashboard
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

                <div className="p-5 bg-white shadow-md rounded-xl border hover:shadow-lg transition">
                    <h2 className='text-sm text-gray-500 mb-1'>Revenue</h2>
                    <p className='text-3xl font-bold text-[#b8860b]'>₹10000</p>
                </div>

                <div className="p-5 bg-white shadow-md rounded-xl border hover:shadow-lg transition">
                    <h2 className='text-sm text-gray-500 mb-1'>Total Orders</h2>
                    <p className='text-3xl font-bold text-gray-800'>10</p>
                    <Link to="/admin/orders" className='text-sm text-[#b8860b] hover:underline mt-2 inline-block'>
                        Manage Orders →
                    </Link>
                </div>

                <div className="p-5 bg-white shadow-md rounded-xl border hover:shadow-lg transition">
                    <h2 className='text-sm text-gray-500 mb-1'>Total Products</h2>
                    <p className='text-3xl font-bold text-gray-800'>10</p>
                    <Link to="/admin/products" className='text-sm text-[#b8860b] hover:underline mt-2 inline-block'>
                        Manage Products →
                    </Link>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-xl font-semibold mb-4 text-gray-800'>
                    Recent Orders
                </h2>

                <div className='overflow-x-auto bg-white rounded-xl shadow-md border'>
                    <table className='min-w-full text-left text-gray-600'>

                        <thead className='bg-gray-100 text-xs uppercase text-gray-600'>
                            <tr>
                                <th className='py-3 px-4'>Order ID</th>
                                <th className='py-3 px-4'>User</th>
                                <th className='py-3 px-4'>Total</th>
                                <th className='py-3 px-4'>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => {
                                    return (
                                        <tr
                                            key={order.id}
                                            className='border-b hover:bg-gray-50 transition'
                                        >
                                            <td className='p-4 font-medium text-gray-800'>
                                                #{order.id}
                                            </td>

                                            <td className='p-4'>
                                                {order.user.name}
                                            </td>

                                            <td className='p-4 font-medium'>
                                                ₹{order.totalprice}
                                            </td>

                                            <td className='p-4'>
                                                <span className='px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 capitalize'>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan={4} className='p-4 text-center text-gray-500'>
                                        No recent orders found
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default AdminHomePage
