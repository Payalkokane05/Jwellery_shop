import React from 'react'
import heroimg from '../../assets/hero2.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        // <div>Hero</div>
        <section className='relative'>
            <img src={heroimg} alt="heroimage" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover object-center' />
            <div className='absolute inset-0  bg-black/30bg-opacity-5 flex item-center justify-center'>
                <div className='text-center text-yellow p-6'>
                    <h2 className='text-4xl md:text-9xl tracking-wider capitalize ml-0 mb-4 mt-40'>
                        Silver Shine
                    </h2>

                    <p className='text-sm tracking-tight  md:text-lg mb-6'>
                        Elegance in Every Detail
                    </p>
                    <Link to="#" className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all">Shop Now</Link>
                </div>
            </div>
        </section>
    )
}

export default Hero