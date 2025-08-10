import React, { useState } from 'react';
import Ordersummery from './Ordersummery';

// Main App component containing the entire payment form
const PaymentCard = () => {
  // State for all form fields
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [postalCode, setPostalCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Simple handler to prevent form submission and log data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', {
      cardNumber,
      expirationDate,
      securityCode,
      country,
      postalCode,
      agreedToTerms,
    });
    // In a real app, you would handle payment processing here
  };

  // Inline SVG for credit card logos
  const cardLogos = (
    <div className="flex items-center space-x-1">
      <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#000">
        <path d="M384 320c0 17.7-14.3 32-32 32H208V160h144c17.7 0 32 14.3 32 32v128zM0 352c0-17.7 14.3-32 32-32h144v192H32c-17.7 0-32-14.3-32-32V352zM384 160H208V0h144c17.7 0 32 14.3 32 32v128zM176 160H32c-17.7 0-32-14.3-32-32V32C0 14.3 14.3 0 32 0h144V160z" />
      </svg>
      <span className="text-sm font-bold text-gray-700">VISA</span>
      <span className="text-sm font-bold text-gray-700">Mastercard</span>
      <span className="text-sm font-bold text-gray-700">AMEX</span>
    </div>
  );

  return (
    <div className="flex items-left justify-left min-h-screen p-8 bg-gray-100 w-full">

      <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-lg">
        {/* Header and warning message */}
        <div className="mb-6">
          <div className="flex items-start p-3 mb-4 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-lg">
            <span className="mr-2 font-bold">Note:</span>
            <span>Please Fill all required fields and check the box to proceed with payment.</span>
          </div>

          <h1 className="text-3xl font-bold text-blue-800">Payment details</h1>
          <p className="flex items-center mt-2 text-sm text-gray-600">
            {/* Lock icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-green-600">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure, fast checkout with Link
            {/* Arrow right icon SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </p>
        </div>

        {/* Payment form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card number</label>
            <div className="relative">
              <input
                id="cardNumber"
                type="text"
                placeholder="1234 1234 1234 1234"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="block w-full p-3 pr-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {cardLogos}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration date</label>
              <input
                id="expirationDate"
                type="text"
                placeholder="MM / YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700">Security code</label>
              <div className="relative">
                <input
                  id="securityCode"
                  type="text"
                  placeholder="CVC"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                  className="block w-full p-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  {/* Credit card icon SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal code</label>
              <input
                id="postalCode"
                type="text"
                placeholder="WS11 1DB"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-gray-600 rounded-lg hover:bg-gray-700"
            >
              Confirm Payment
            </button>
          </div>
        </form>

        {/* Separator */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute w-full h-px bg-gray-300"></div>
          <div className="relative px-2 text-sm text-gray-500 bg-white">or</div>
        </div>

        {/* PayPal button */}
        <div>
          <button
            type="button"
            className="flex items-center justify-center w-full px-6 py-3 text-xl font-bold text-blue-800 transition-colors duration-200 bg-yellow-200 rounded-lg hover:bg-yellow-300"
          >
            PayPal
          </button>
        </div>
      </div>
      <Ordersummery />

    </div>

  );
}

export default PaymentCard;