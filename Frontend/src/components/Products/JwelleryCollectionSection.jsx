import React from 'react'
import { Link } from 'react-router-dom'
import goldcollection from '../../assets/gold-collection-img.jfif'
import silvercollection from "../../assets/silver-collection-img.jfif"

const JwelleryCollectionSection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                {/* golden collection  */}
                <div className='relative flex-1 '>
                    <img src={goldcollection} alt='golden collection' className='w-full h-[700px] object-cover' />
                    <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 '>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Women collection
                        </h2>
                        <Link to="/collection/all?jwellery=women"> Shop Now</Link>
                    </div>
                </div>
                <div className='relative flex-1 '>
                    <img src={silvercollection} alt='silver collection' className='w-full h-[700px] object-cover' />
                    <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 '>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            Men collection
                        </h2>
                        <Link to='/collection/all?jwellery=men'> Shop Now</Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default JwelleryCollectionSection