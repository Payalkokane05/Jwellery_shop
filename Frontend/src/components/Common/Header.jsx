import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from '../Layout/Navbar'
const Header = () => {
    return (
        <header className='border-b boder-gray-200'>
            {/*Tobbar*/}
            <Topbar />
            {/*Navbar*/}
            <Navbar />
            {/*cart drawer*/}
        </header>
    )
}

export default Header