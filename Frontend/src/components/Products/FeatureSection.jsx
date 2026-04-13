import React from 'react'
import { HiShoppingBag, HiShieldCheck, HiSparkles } from 'react-icons/hi'

const FeatureSection = () => {
    return (
        <section className='py-10 px-4 bg-white'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>

                {/* 1 */}
                <div className='flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group cursor-pointer'>
                    <div className='p-4 bg-gray-100 rounded-full mb-4 border border-[#D4AF37]'>
                        <HiShoppingBag className='text-2xl text-[#D4AF37]' />
                    </div>
                    <h4 className='tracking-tight font-semibold mb-2'>
                        FREE SHIPPING
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tight'>
                        Free shipping on all orders above ₹999
                    </p>
                </div>

                {/* 2 */}
                <div className='flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group cursor-pointer'>
                    <div className='p-4 bg-gray-100 rounded-full mb-4 border border-[#D4AF37]'>
                        <HiShieldCheck className='text-2xl text-[#D4AF37]' />
                    </div>
                    <h4 className='tracking-tight font-semibold mb-2'>
                        SECURE PAYMENT
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tight'>
                        100% secure payment with trusted methods
                    </p>
                </div>

                {/* 3 */}
                <div className='flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group cursor-pointer'>
                    <div className='p-4 bg-gray-100 rounded-full mb-4 border border-[#D4AF37]'>
                        <HiSparkles className='text-2xl text-[#D4AF37] ' />
                    </div>
                    <h4 className='tracking-tight font-semibold mb-2'>
                        PREMIUM QUALITY
                    </h4>
                    <p className='text-gray-600 text-sm tracking-tight'>
                        Crafted with finest gold and silver materials
                    </p>
                </div>

            </div>
        </section>
    )
}

export default FeatureSection
