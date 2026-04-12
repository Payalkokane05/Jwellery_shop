import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cart = {
    products: [
        {
            productid: 1,
            name: "Gold Necklace",
            price: 50000,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            quantity: 1,
            weight: "10g"
        },
        {
            productid: 2,
            name: "Silver Bangles",
            price: 100000,
            size: "2*4",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            quantity: 2,
        }
    ],
    totalprice: 100
}

const Checkout = () => {
    const navigate = useNavigate()
    const [checkoutId, setCheckoutId] = useState(null)

    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: '',
        country: "",
        postalcode: "",
        phone: ""
    })

    const handleCreateCheckout = (e) => {
        e.preventDefault()
        setCheckoutId(123)
    }

    const handleOrderConfirm = () => {
        navigate("/order-confirmation")
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tight'>

            {/* left section */}
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-lg uppercase mb-6 font-bold'>Checkout</h2>

                <form onSubmit={handleCreateCheckout} className='border border-gray-300 text-black p-7 rounded'>

                    <h3 className='text-lg mb-4'>Contact Details</h3>

                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input
                            type='email'
                            value="user@gmail.com"
                            className='w-full p-2 border rounded'
                            disabled
                        />
                    </div>

                    <h3 className='text-lg mb-4'>Delivery</h3>

                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700'>First Name</label>
                            <input
                                type='text'
                                className='w-full p-2 border rounded'
                                value={shippingAddress.firstName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        firstName: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700'>Last Name</label>
                            <input
                                type='text'
                                className='w-full p-2 border rounded'
                                value={shippingAddress.lastName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        lastName: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700'>Address</label>
                        <input
                            type='text'
                            value={shippingAddress.address}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    address: e.target.value
                                })
                            }
                            className='w-full p-2 border rounded'
                        />
                    </div>

                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700'>City</label>
                            <input
                                type='text'
                                className='w-full p-2 border rounded'
                                value={shippingAddress.city}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        city: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-gray-700'>Postal Code</label>
                            <input
                                type='number'
                                className='w-full p-2 border rounded'
                                value={shippingAddress.postalcode}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        postalcode: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700'>Country</label>
                        <input
                            type='text'
                            value={shippingAddress.country}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    country: e.target.value
                                })
                            }
                            className='w-full p-2 border rounded'
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700'>Phone Number</label>
                        <input
                            type='number'
                            value={shippingAddress.phone}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    phone: e.target.value
                                })
                            }
                            className='w-full p-2 border rounded'
                        />
                    </div>

                    <div className='mt-6'>
                        {!checkoutId ? (
                            <button type='submit' className='text-white bg-black w-full py-3 rounded'>
                                Continue
                            </button>
                        ) : (
                            <div>
                                <button onClick={handleOrderConfirm} className='text-white bg-black w-full py-3 rounded'>Confirm the Order</button>
                            </div>
                        )}
                    </div>

                </form>
            </div>

            {/* right section */}
            <div className='bg-gray-50 p-6 rounded-lg'>
                <h3 className='text-lg mb-4'>Order Summary</h3>

                <div className='border-t py-4 mb-4'>
                    {cart.products.map((product, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-between py-2 border-b'
                        >
                            <div className='flex items-start'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='w-20 h-24 object-cover mr-4'
                                />

                                <div>
                                    <h3 className='text-md'>{product.name}</h3>

                                    <p className='text-gray-500'>
                                        {product.weight ? `Weight: ${product.weight}` : ''}
                                    </p>

                                    <h3 className='text-md'>
                                        Quantity: {product.quantity}
                                    </h3>
                                </div>
                            </div>

                            <p className='text-xl'>
                                ₹{product.price?.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between items-center text-lg mb-4'>
                    <p>SubTotal</p>
                    <p>₹{cart.totalprice?.toLocaleString()}</p>
                </div>
                <div className='flex justify-between items-center text-lg'>
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className='flex justify-between items-center text-lg mt-4'>
                    <p>Total</p>
                    <p>₹{cart.totalprice?.toLocaleString()}</p>
                </div>
            </div>

        </div>
    )
}

export default Checkout
