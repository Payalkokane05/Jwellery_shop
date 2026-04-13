import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from '../Common/SearchBar'
import CartDrawer from './CartDrawer'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {
    const [drawerOpen, setdrawerOpen] = useState(false)
    const [navDrawerOpen, setNavDrawerOpen] = useState(false)

    const togglenavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }
    const toggleCartDrawer = () => {
        setdrawerOpen(!drawerOpen)
    }
    return (
        <>
            <div className='border-b border-rabbit-red'>
                <nav className='container mx-auto flex items-center justify-between py-4 px-6 bg-white/90 backdrop-blur-md shadow-sm '>
                    {/*left-logo */}
                    {/* <div className='w-10 h-10 bg-yellow-600 rounded flex items-center justify-center group-hover:bg-yellow-700 transition-colors'>
                    <Link to="/" className="text-2xl font-medium "> Jewels </Link>
                </div> */}
                    <Link to="/" className="inline-flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-yellow-600 rounded flex items-center justify-center group-hover:bg-yellow-700 transition-colors">
                            <span className="text-white font-serif font-bold text-xl">SP</span>
                        </div>
                        <span className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
                            <span className="text-black-600">Jewellery</span>
                        </span>
                    </Link>
                    {/*center navigation links*/}
                    <div className='hidden md:flex space-x-4'>
                        <Link to="/" className='text-md font-bold text-[#1a1a1a] hover:text-[#b8860b] transition-all relative group py-2 uppercase'>
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8860b] transition-all group-hover:w-full"></span>
                        </Link>
                        <Link to="/collection/all?jwellery=women" className='text-md font-bold text-[#1a1a1a] hover:text-[#b8860b] transition-all relative group py-2 uppercase'>
                            Women
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8860b] transition-all group-hover:w-full"></span>
                        </Link>

                        <Link to="/collection/all?jwellery=men" className='text-md font-bold text-[#1a1a1a] hover:text-[#b8860b] transition-all relative group py-2 uppercase'>
                            Men
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8860b] transition-all group-hover:w-full"></span>
                        </Link>
                    </div>

                    {/*right icons*/}
                    <div className='flex items-center space-x-4'>
                        <Link to="/admin" className=' block bg-black px-2 py-2 rounded text-sm text-white'>Admin</Link>
                        <Link to="/profile" className='hover:text-black'>
                            <HiOutlineUser className='h-6 w-6 text-gray-700 ' />
                        </Link>
                        <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                            <span className='absolute -top-1 -right-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>0</span>
                        </button>
                        {/*search*/}
                        <div>
                            < SearchBar />
                        </div>

                        <button onClick={togglenavDrawer} className='md:hidden'>
                            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                        </button>

                    </div>
                </nav>
            </div>
            <CartDrawer drawerOpen={drawerOpen} setdrawerOpen={setdrawerOpen} />
            {/* mobile navigation */}
            {/* Overlay */}
            {navDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={togglenavDrawer}
                />
            )}

            {/* mobile navigation */}
            <div
                className={`fixed top-0 left-0 w-72 h-full bg-white shadow-2xl transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b bg-gray-50">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center">
                            <span className="text-white font-bold">SP</span>
                        </div>
                        <span className="font-semibold text-lg">Jewellery</span>
                    </div>

                    <button onClick={togglenavDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black" />
                    </button>
                </div>

                {/* Menu */}
                <div className="p-5">
                    <nav className="space-y-6 text-gray-700">

                        <Link
                            to="/"
                            onClick={togglenavDrawer}
                            className="block text-base font-medium hover:text-black"
                        >
                            Home
                        </Link>

                        <Link
                            to="/collection/all?jwellery=men"
                            onClick={togglenavDrawer}
                            className="block text-base font-medium hover:text-black"
                        >
                            Men
                        </Link>

                        <Link
                            to="/collection/all?jwellery=women"
                            onClick={togglenavDrawer}
                            className="block text-base font-medium hover:text-black"
                        >
                            Women
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar