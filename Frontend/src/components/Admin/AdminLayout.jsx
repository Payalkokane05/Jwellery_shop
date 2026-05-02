import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen)
    }
    return (
        <div className='min-h-screen flex flex-col md:flex-row relative'>
            {/* mobile toggle button */}
            <div className='flex md:hidden p-4 bg-[#0f0f10] text-white z-20'>
                <button onClick={toggleSidebar}>
                    <FaBars size={24} />
                </button>
                <h1 className='ml-4 text-xl font-medium'>Admin Dashboard</h1>
            </div>
            {/* overlays for mobile sidebar  */}
            {isSidebarOpen && (
                <div className='fixed inset-0  z-10 bg-black bg-opacity-50  md:hidden' onClick={toggleSidebar}>
                </div>
            )}
            {/* sidebar  */}
            <div className={`w-64 min-h-screen bg-[#0f0f10] text-white absolute md:relative transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
                {/* sidebar component  */}
                <AdminSidebar />
            </div>
            {/* main content  */}
            <div className='flex-grow p-6 overflow-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout