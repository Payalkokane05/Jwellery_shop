import React from 'react'
import { RiPriceTag2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ProductManagement = () => {
    const products = [
        {
            id: 12,
            name: "Necklace",
            price: 10000,
            sku: "12342"
        }
    ]

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product ?")) {
            console.log("deleting product with ID", id)
        }

    }
    return (
        <div className='max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen'>

            <h2 className='text-2xl font-bold mb-8 text-gray-800'>
                Product Management
            </h2>

            <div className='overflow-x-auto bg-white shadow-md rounded-xl border'>

                <table className='min-w-full text-sm text-gray-600'>

                    <thead className='bg-gray-100 text-xs uppercase text-gray-600'>
                        <tr>
                            <th className='py-3 px-4 text-left'>Name</th>
                            <th className='py-3 px-4 text-left'>Price</th>
                            <th className='py-3 px-4 text-left'>SKU</th>
                            <th className='py-3 px-4 text-left'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => {
                                return (
                                    <tr
                                        key={product.id}
                                        className='border-b hover:bg-gray-50 transition'
                                    >

                                        <td className='p-4 font-medium text-gray-800 whitespace-nowrap'>
                                            {product.name}
                                        </td>

                                        <td className='p-4 font-semibold text-gray-500]'>
                                            ₹{product.price}
                                        </td>

                                        <td className='p-4 text-gray-500'>
                                            {product.sku}
                                        </td>

                                        <td className='p-4 flex space-x-2'>

                                            <Link
                                                to={`/admin/products/${product.id}/edit`}
                                                className="bg-[#b8860b] text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition text-sm"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                to={`/admin/products/add`}
                                                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition text-sm"
                                            >
                                                Add
                                            </Link>

                                            <button
                                                onClick={() => { handleDelete(product.id) }}
                                                className='bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm'
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center py-6 text-gray-500'>
                                    No products found
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>

            </div>

        </div>

    )
}

export default ProductManagement