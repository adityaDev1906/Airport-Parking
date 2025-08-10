import React from 'react';

 const PaymentCardheader = () => {
  return (
      <div className="w-full p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-shrink-0">
          {/* Using a placeholder for the logo image */}
          <img
            src="https://placehold.co/100x100/A0E6FF/000?text=Meet%20and%20Greet"
            alt="Meet and Greet Airport Parking Bristol"
            className="w-24 h-24 rounded-lg"
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-500">Bristol</span> Airport Cheap Parking
          </h2>
          <p className="mt-2 text-lg font-semibold text-gray-800">Meet & Greet Airport Parking Bristol</p>
          <p className="text-gray-600">Meet And Greet</p>
          <div className="mt-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="font-semibold">From: Aug 10, 2025 12:00 to Aug 17, 2025 12:00</p>
            <button className="flex items-center justify-center px-4 py-2 text-white bg-orange-400 rounded-lg shadow-md hover:bg-orange-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3H12c7 0 9 1.8 9 9z"/>
                <circle cx="12" cy="12" r="5"/>
              </svg>
              Change
            </button>
          </div>
      </div>
    </div>
  );
}

export default PaymentCardheader;