import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import loginimg from "../assets/home.jfif"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)
    }
    return (
        <div className='flex min-h-screen'>

            {/* LEFT */}
            <div className='w-full md:w-1/2 flex justify-center items-center p-8 bg-gradient-to-br from-white to-gray-100'>

                <form onSubmit={handleSubmit} className='w-full max-w-md p-8 rounded-2xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl'>

                    <h2 className='text-center text-2xl font-bold mb-2 tracking-wide'>
                        Hey there !
                    </h2>

                    <p className='text-center text-gray-600 mb-6 text-sm'>
                        Sign up to continue your jewellery journey 💎
                    </p>

                    <div className='mb-5'>
                        <label className='block text-sm font-medium mb-2'>Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg transition'
                            placeholder='Enter your name'
                        />
                    </div>
                    {/* EMAIL */}
                    <div className='mb-5'>
                        <label className='block text-sm font-medium mb-2'>Email</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg transition'
                            placeholder='Enter your email'
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className='mb-5'>
                        <label className='block text-sm font-medium mb-2'>Password</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg transition'
                            placeholder='Enter your password'
                        />
                    </div>

                    {/* BUTTON */}
                    <button
                        type='submit'
                        className='w-full py-3 rounded-lg font-semibold text-white bg-[#D4AF37] transition duration-300 shadow-md hover:shadow-lg'
                    >
                        Sign up
                    </button>

                    {/* LINK */}
                    <p className='mt-6 text-center text-sm text-gray-600'>
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 font-medium hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            {/* RIGHT IMAGE */}
            <div className='hidden md:block w-1/2 relative'>

                <img
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
                    alt="Login"
                    className='h-full w-full object-cover'
                />
            </div>

        </div>
    )
}

export default Register
