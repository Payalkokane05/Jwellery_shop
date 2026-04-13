import React, { useState } from 'react'

const EditProductPage = () => {
    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        sku: "",
        category: "",
        countInStock: 0,
        image: "",
        material: "",
        weight: "",
        gender: "",
        images: [
            {
                url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
            },
            {
                url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e"
            }
        ]
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProductData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        console.log(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productData)
    }

    return (
        <div className='max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen'>

            <div className='bg-white shadow-md rounded-xl p-8 border'>
                <h2 className='text-3xl font-bold mb-8 text-gray-800'>
                    Edit Product
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium mb-2 text-gray-600'>
                            Product Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            value={productData.name}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                            required
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium mb-2 text-gray-600'>
                            Description
                        </label>
                        <textarea
                            name='description'
                            value={productData.description}
                            onChange={handleChange}
                            className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                            rows={4}
                            required
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <div>
                            <label className='block text-sm font-medium mb-2 text-gray-600'>
                                Price
                            </label>
                            <input
                                type='number'
                                name='price'
                                value={productData.price}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-2 text-gray-600'>
                                Count In Stock
                            </label>
                            <input
                                type='number'
                                name='countInStock'
                                value={productData.countInStock}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-2 text-gray-600'>
                                SKU
                            </label>
                            <input
                                type='text'
                                name='sku'
                                value={productData.sku}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-2 text-gray-600'>
                                Weight
                            </label>
                            <input
                                type='text'
                                name='weight'
                                value={productData.weight}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#b8860b] focus:outline-none'
                            />
                        </div>

                    </div>

                    {/* Image */}
                    <div className='mb-6 mt-6'>
                        <label className='block text-sm font-medium mb-2 text-gray-600'>
                            Upload Image
                        </label>

                        <input
                            type='file'
                            onChange={handleImageUpload}
                            className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#b8860b] file:text-white hover:file:bg-yellow-700'
                        />

                        <div className='flex gap-4 mt-4 flex-wrap'>
                            {productData.images.map((image, index) => (
                                <div key={index} className='group relative'>
                                    <img
                                        src={image.url}
                                        alt="product"
                                        className='w-20 h-20 object-cover rounded-lg shadow-md border group-hover:scale-105 transition'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-[#b8860b] text-white py-3 rounded-lg hover:bg-yellow-700 transition font-medium'
                    >
                        Update Product
                    </button>

                </form>
            </div>

        </div>
    )
}

export default EditProductPage
