import React, { useState } from 'react'

const UserManagement = () => {
    const users = [
        {
            id: 123,
            name: "jhon deo",
            email: "jhon@exmple.com",
            role: "Admin",
        },
    ]

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",  //default role customer
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        // reset from after submition
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        })
    }

    const handleRoleChange = (userId, newRole) => {
        console.log(userId, newRole)
    }

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user")) {
            console.log("deleteing user with ID", userId)
        }
    }
    return (
        <div className='max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen'>

            <h2 className='text-2xl font-bold mb-8 text-gray-800'>
                User Management
            </h2>

            {/* Add new user form */}
            <div className='p-6 rounded-xl mb-8 bg-white shadow-md border'>
                <h3 className='text-lg font-semibold mb-4 text-gray-700'>
                    Add New User
                </h3>

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-sm text-gray-600 mb-1'>Name</label>
                        <input
                            type='text'
                            value={formData.name}
                            name="name"
                            onChange={handleChange}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm text-gray-600 mb-1'>Email</label>
                        <input
                            type='email'
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm text-gray-600 mb-1'>Password</label>
                        <input
                            type='password'
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm text-gray-600 mb-1'>Role</label>
                        <select
                            name='role'
                            value={formData.role}
                            onChange={handleChange}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                        >
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div>

                    <button
                        type='submit'
                        className='bg-[#b8860b] text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition'
                    >
                        Add User
                    </button>
                </form>
            </div>

            {/* User list */}
            <div className='overflow-x-auto bg-white shadow-md rounded-xl border'>
                <table className='min-w-full text-sm text-gray-600'>

                    <thead className='bg-gray-100 text-xs uppercase text-gray-600'>
                        <tr>
                            <th className='py-3 px-4 text-left'>Name</th>
                            <th className='py-3 px-4 text-left'>Email</th>
                            <th className='py-3 px-4 text-left'>Role</th>
                            <th className='py-3 px-4 text-left'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.id} className='border-b hover:bg-gray-50 transition'>

                                    <td className='p-4 font-medium text-gray-800 whitespace-nowrap'>
                                        {user.name}
                                    </td>

                                    <td className='p-4'>
                                        {user.email}
                                    </td>

                                    <td className='p-4'>
                                        <select
                                            value={user.role}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                            className='p-2 border rounded-lg focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                                        >
                                            <option value="customer">Customer</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </td>

                                    <td className='p-4'>
                                        <button
                                            onClick={() => handleDeleteUser(user.id)}
                                            className='bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition'
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>

        </div>

    )
}

export default UserManagement