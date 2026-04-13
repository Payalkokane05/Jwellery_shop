import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBox, FaClipboardCheck, FaUsers, FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate = useNavigate()

    const handlelogout = () => { }

    return (
        <div className='p-6 h-screen bg-[#0f0f10] text-white flex flex-col justify-between'>

            {/* Top */}
            <div>
                <div className="mb-8 text-center">
                    <Link to="/admin" className="text-2xl font-bold tracking-wide text-white">
                        SP-Jewellery
                    </Link>
                </div>

                <h2 className='text-sm uppercase tracking-widest text-gray-400 mb-4 text-center'>
                    Admin Dashboard
                </h2>

                <nav className='flex flex-col space-y-2'>

                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200
                            ${isActive
                                ? "bg-white text-gray-900 shadow-md"
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
                        }
                    >
                        <FaUsers />
                        <span>Users</span>
                    </NavLink>

                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200
                            ${isActive
                                ? "bg-white text-gray-900 shadow-md"
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
                        }
                    >
                        <FaBox />
                        <span>Products</span>
                    </NavLink>

                    <NavLink
                        to="/admin/orders"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200
                            ${isActive
                                ? "bg-white text-gray-900 shadow-md"
                                : "text-gray-300 hover:bg-gray-800 hover:text-white"}`
                        }
                    >
                        <FaClipboardCheck />
                        <span>Orders</span>
                    </NavLink>

                </nav>
            </div>

            {/* Bottom */}
            <div>
                <button
                    onClick={handlelogout}
                    className='w-full bg-red-500 hover:bg-red-600 transition-all duration-200 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-md'
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>

        </div>
    )
}

export default AdminSidebar
