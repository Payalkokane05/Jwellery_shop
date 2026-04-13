import React from 'react'
import { Link } from 'react-router-dom'
import goldcollection from '../../assets/gold-collection-img.jfif'
import silvercollection from "../../assets/silver-collection-img.jfif"

const JwelleryCollectionSection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>

            {/* Heading */}
            <div className='relative w-fit mx-auto mb-12 group'>
                <h2 className='text-3xl font-bold text-center tracking-wide'>
                    Our Collections
                </h2>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#b8860b] transition-all duration-500 group-hover:w-full"></span>
                <p className='text-[#C9A227]  text-center mt-2 text-sm md:text-base'>
                    Discover timeless elegance crafted to match every style and occasion.
                </p>
            </div>

            <div className='container mx-auto flex flex-col md:flex-row gap-8'>

                {/* golden collection  */}
                <div className='relative flex-1 overflow-hidden rounded-xl group cursor-pointer'>

                    <img
                        src={goldcollection}
                        alt='golden collection'
                        className='w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* overlay */}
                    <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500'></div>

                    <div className='absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-5 rounded-lg shadow-md transition-all duration-300 group-hover:translate-y-[-5px]'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Women collection
                        </h2>
                        <Link
                            to="/collection/all?jwellery=women"
                            className='text-[#b8860b] font-semibold hover:underline'
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* silver collection */}
                <div className='relative flex-1 overflow-hidden rounded-xl group cursor-pointer'>

                    <img
                        src={silvercollection}
                        alt='silver collection'
                        className='w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-110'
                    />

                    {/* overlay */}
                    <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500'></div>

                    <div className='absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-5 rounded-lg shadow-md transition-all duration-300 group-hover:translate-y-[-5px]'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Men collection
                        </h2>
                        <Link
                            to='/collection/all?jwellery=men'
                            className='text-[#b8860b] font-semibold hover:underline'
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default JwelleryCollectionSection
