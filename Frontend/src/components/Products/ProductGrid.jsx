import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
    return (
        <div className="container mx-auto px-4 py-8">

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {products.map((product) => (

                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="block"
                    >
                        <div
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-[320px] md:h-[350px] lg:h-[380px] flex flex-col group cursor-pointer"
                        >

                            {/* Image Section */}
                            <div className="h-[70%] flex items-center justify-center p-1">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="h-[30%] p-4 text-center flex flex-col justify-center">
                                <h2 className="text-sm md:text-base font-semibold text-black-800">
                                    {product.name}
                                </h2>
                                <p className="text-black font-bold mt-2 text-sm md:text-lg">
                                    ₹{product.price}
                                </p>
                            </div>

                        </div>
                    </Link>

                ))}

            </div>
        </div>
    )
}

export default ProductGrid
