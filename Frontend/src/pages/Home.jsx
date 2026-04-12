import React from 'react'
import Hero from '../components/Layout/Hero'
import JwelleryCollectionSection from '../components/Products/JwelleryCollectionSection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import FeatureSection from '../components/Products/FeatureSection';

const Home = () => {
    return (
        <div>
            <Hero />
            <JwelleryCollectionSection />
            <NewArrivals />

            {/* best seller  */}
            {/* <h2 className='text-3xl text-center font-bold mb-4 '>Best Seller </h2> */}
            <ProductDetails />
            <FeatureSection />

        </div>
    )
}

export default Home;