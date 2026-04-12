import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='border-t py-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>

                {/* Newsletter */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                    <p className='text-gray-500 mb-4'>
                        Get updates on new jewellery collections, exclusive offers, and festive discounts.
                    </p>

                    <form className='flex'>
                        <input
                            type='email'
                            placeholder='Enter your Email'
                            className='p-3 w-full text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500'
                            required
                        />
                        <button
                            type='submit'
                            className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800'
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Shop */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li><Link to="#" className="hover:text-black">Gold Jewellery</Link></li>
                        <li><Link to="#" className="hover:text-black">Silver Jewellery</Link></li>
                        <li><Link to="#" className="hover:text-black">Necklaces</Link></li>
                        <li><Link to="#" className="hover:text-black">Bangles & Bracelets</Link></li>
                        <li><Link to="#" className="hover:text-black">Rings</Link></li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>About Us</h3>
                    <p className='text-gray-500'>
                        At SP Jewellery, we offer elegant and timeless designs crafted with precision.
                        Discover premium gold and silver jewellery perfect for every occasion.
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Contact</h3>
                    <p className='text-gray-500'>📍 Kolhapur, India</p>
                    <p className='text-gray-500'>📞 +91 XXXXXXXX</p>
                    <p className='text-gray-500'>✉️ support@spjewellery.com</p>
                </div>
            </div>
            {/* footer bottom / */}
            <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
                <p className='text-gray-500 text-sm tracking-tight text-center w-full'>
                    © 2026 SP Jewellery. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
