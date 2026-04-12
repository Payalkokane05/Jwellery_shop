import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterLine } from 'react-icons/ri'

const Topbar = () => {
    return (
        <>
            <div className='bg-rabbit-red text-black'>
                <div className='container mx-auto flex justify-between item-center py-3 px-4'>
                    <div className='hidden md:flex items-center space-x-4'>
                        <a href="#" className='hover:text-gray-300'>
                            <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
                        </a>
                        <a href="#" className='hover:text-gray-300'>
                            <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram>
                        </a>
                        <a href="#" className='hover:text-gray-300'>
                            <RiTwitterLine className="h-5 w-5"></RiTwitterLine>
                        </a>
                    </div>
                    <div className='text-sm text-center'>
                        <span>We ship world-wide - Fast and realible shipping</span>
                    </div>
                    <div className='text-sm hidden md:block'>
                        <a href="tel:+919876543210" className='hover:text-gray-300'>+91 9876543210</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar