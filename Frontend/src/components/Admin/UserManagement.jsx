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
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-6'>User Management</h2>
            {/* Add new user form  */}
            <div className='p-6 rounded-lg mb-6'>
                <h3 className='text-lg font-bold mb-4'>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input type='text' value={formData.name} name="name"
                            onChange={handleChange}
                            className='w-full p-2 border rounded' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input type='email' value={formData.email} name="email"
                            onChange={handleChange}
                            className='w-full p-2 border rounded' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Password</label>
                        <input type='password' value={formData.password} name="password"
                            onChange={handleChange}
                            className='w-full p-2 border rounded' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Role</label>
                        <select name='role' value={formData.role}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'>
                            <option value="admin">Admin</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div>
                    <button type='submit' className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
                        Add User
                    </button>
                </form>
            </div>
            {/* user list  */}
            <div className='overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='min-w-full text-xs uppercase text-gray-700'>
                    <thead>
                        <tr>
                            <th className='py-3 px-4'>Name</th>
                            <th className='py-3 px-4'>Email</th>
                            <th className='py-3 px-4'>Role</th>
                            <th className='py-3 px-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.id} className='border-b hover:bg-gray-50'>
                                    <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {user.name}
                                    </td>
                                    <td className='p-4'>
                                        {user.email}
                                    </td>
                                    <td className='p-4'>
                                        <select value={user.role}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                            className='p-2 border rounded'>
                                            <option value="customer">Customer </option>
                                            <option value="admin">Admin </option>
                                        </select>
                                    </td>
                                    <td className='p-4'>
                                        <button onClick={() => handleDeleteUser(user.id)} className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>Delete</button>
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