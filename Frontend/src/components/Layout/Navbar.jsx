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
            <nav className='container mx-auto flex items-center justify-between py-4 px-6 bg-white/90 backdrop-blur-md shadow-sm'>
                {/*left-logo */}
                <div>
                    <Link to="/" className="text-2xl font-medium "> SP-Jewellery</Link>
                </div>
                {/*center navigation links*/}
                <div className='hidden md:flex space-x-4'>
                    <Link to="/" className='text-gray-700 hover:text-black text-md font-medium uppercase hover:underline decoration-[#D4AF37] underline-offset-4'>
                        Home
                    </Link>
                    <Link to="/collection/all?jwellery=women" className='text-gray-700 hover:text-black text-md font-medium uppercase hover:underline decoration-[#D4AF37] underline-offset-4'>
                        Women
                    </Link>

                    <Link to="/collection/all?jwellery=men" className='text-gray-700 hover:text-black text-md font-medium uppercase hover:underline decoration-[#D4AF37] underline-offset-4'>
                        Men
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
            <CartDrawer drawerOpen={drawerOpen} setdrawerOpen={setdrawerOpen} />
            {/* mobile navigation */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='flex justify-end p-4'>
                    {/* close button */}
                    <button onClick={togglenavDrawer}>
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="#" onClick={togglenavDrawer} className='block text-gray-700 hover:text-black text-md hover:underline decoration-[#D4AF37] underline-offset-4'>Home</Link>
                        <Link to="#" onClick={togglenavDrawer} className='block text-gray-700 hover:text-black text-md hover:underline decoration-[#D4AF37] underline-offset-4'>Men</Link>
                        <Link to="#" onClick={togglenavDrawer} className='block  text-gray-700 hover:text-black text-md hover:underline decoration-[#D4AF37] underline-offset-4'>Women</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar