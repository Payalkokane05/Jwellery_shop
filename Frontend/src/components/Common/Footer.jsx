import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className='bg-gray-50 text-black border-t border-gray-800 py-14'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 lg:px-0'>

                {/* Newsletter */}
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-[#D4AF37]'>Newsletter</h3>
                    <p className='text-black mb-4 text-sm leading-relaxed'>
                        Get updates on new jewellery collections, exclusive offers, and festive discounts.
                    </p>

                    <form className='flex'>
                        <input
                            type='email'
                            placeholder='Enter your Email'
                            className='p-3 w-full text-sm bg-transparent border border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]'
                            required
                        />
                        <button
                            type='submit'
                            className='bg-[#D4AF37] text-black px-5 py-3 text-sm rounded-r-md hover:bg-yellow-500 transition'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social */}
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-[#D4AF37]'>Visit Us</h3>
                    <ul className='flex space-x-4 text-black'>
                        <li>
                            <a href="#" className='hover:text-[#D4AF37] transition transform hover:scale-110'>
                                <TbBrandMeta className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#D4AF37] transition transform hover:scale-110'>
                                <IoLogoInstagram className="h-6 w-6" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#D4AF37] transition transform hover:scale-110'>
                                <RiTwitterLine className="h-6 w-6" />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-[#D4AF37]'>About Us</h3>
                    <p className='text-black text-sm leading-relaxed'>
                        At SP Jewellery, we offer elegant and timeless designs crafted with precision.
                        Discover premium gold and silver jewellery perfect for every occasion.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className='text-lg font-semibold mb-4 text-[#D4AF37]'>Contact</h3>
                    <p className='text-black text-sm mb-1'>📍 Kolhapur, India</p>
                    <p className='text-black text-sm mb-1'>📞 +91 XXXXXXXX</p>
                    <p className='text-black text-sm'>✉️ support@spjewellery.com</p>
                </div>
            </div>

            {/* footer bottom */}
            <div className='container mx-auto mt-12 px-4 lg:px-0  pt-6'>
                <p className='text-black text-sm text-center tracking-wide'>
                    © 2026 SP Jewellery. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
