import React from 'react';

// Main App component that renders the Order Summary card
const Ordersummery = () => {  // Sample data for the order summary items
    const orderItems = [
        { label: 'Quote Amount:', value: 71.99 },
        { label: 'Discount Amount', value: -0.00 },
        { label: 'Booking Charges', value: 1.95 },
        { label: 'Cancellations Charges', value: 0.00 },
        { label: 'Sms Charges', value: 0.00 },
    ];

    // Calculate the total amount
    const totalAmount = orderItems.reduce((sum, item) => sum + item.value, 0);

    // Helper function to format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(amount);
    };

    return (
        <div className="flex items-right justify-right min-h-screen p-8 bg-gray-100 w-full">

            <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-lg ">
                <div className='bg-gradient-to-r from-blue-400 to-indigo-600 text-white text-center py-5 rounded-t-3xl font-bold text-xl tracking-wide'>
                    Order Summary
                </div>



                {/* Body of the card containing the summary details */}
                <div className="p-6">
                    {/* Loop through the order items to display each row */}
                    {orderItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center py-4 text-gray-700 ${index < orderItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                        >
                            <span className="text-sm">{item.label}</span>
                            <span className="text-sm font-semibold">{formatCurrency(item.value)}</span>
                        </div>
                    ))}

                    {/* Total amount section with a thicker top border for separation */}
                    <div className="flex justify-between items-center pt-6 mt-4 border-t-2 border-gray-300 font-bold text-lg text-gray-900">
                        <span>Total</span>
                        <span>{formatCurrency(totalAmount)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ordersummery;
