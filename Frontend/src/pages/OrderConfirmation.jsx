import React from 'react'

const checkout = {
    id: 1,
    date: new Date(),
    checkoutItems: [
        {
            productid: "1",
            name: "Gold Ring",
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
            price: 50000,
            quantity: 1,
            weight: "10g"
        },
        {
            productid: "2",
            name: "Silver Ring",
            image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
            price: 10000,
            quantity: 1,
            weight: "10g"
        }
    ],
    shippingAddress: {
        address: "123 Main St, USA",
        city: "New York",
        postalcode: "12345",
        country: "USA"
    }
}


const OrderConfirmation = () => {
    const calculateEstimatedDelivery = (date) => {
        const orderDate = new Date(date)
        orderDate.setDate(orderDate.getDate() + 10) //Add 10 days to order date
        return orderDate.toLocaleDateString()
    }
    return (
        <div className='max-w-4xl mx-auto p-6 bg-white'>
            <h1 className='text-4xl font-bold text-center  text-emerald-700 mb-8'>
                Thank You for Your Order!
            </h1>
            {checkout && (
                <div className='p-6 rounded-lg border'>
                    <div className='flex justify-between mb-20'>
                        {/* order Id and Date  */}
                        <div>
                            <h2 className='text-xl font-semibold'>
                                Order ID: {checkout.id}
                            </h2>
                            <p className='text-gray-500'>
                                Order Date: {checkout.date.toLocaleDateString()}
                            </p>
                        </div>
                        {/* Estimated delivery  */}
                        <div>
                            <p className='text-emerald-700 text-sm'>
                                Estimated Delivery : {calculateEstimatedDelivery(checkout.date)}
                            </p>
                        </div>
                    </div>
                    {/* ordered items  */}
                    <div className='mb-20'>
                        {checkout.checkoutItems.map((item) => (
                            <div key={item.productid} className='flex item-center mb-4 '>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-16 object-cover rounded-md mr-4 ' />
                                <div>
                                    <h4 className='text-md font-semibold '> {item.name}</h4>
                                    <p className='text-sm text-gray-500'>{item.weight}</p>
                                </div>
                                <div className='ml-auto text-right'>
                                    <p className="text-md">₹{item.price}</p>
                                    <p className='text-sm text-gray-500'>Qty : {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-2 '>
                        {/* payment details  */}
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>Payment</h4>
                            <p className='text-gray-600'>Cash on Delivery</p>
                        </div>
                        {/* delivery info  */}
                        <div>
                            <h4 className='text-lg font-semibold mb-2'>Delivery</h4>
                            <p className='text-gray-600'>{checkout.shippingAddress.address}</p>
                            <p className='text-gray-600'>{checkout.shippingAddress.city},{" "}{checkout.shippingAddress.country}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderConfirmation