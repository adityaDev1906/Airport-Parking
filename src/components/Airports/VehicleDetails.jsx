import React, { useState } from 'react';

const VehicleDetails = () => {

    const [options, setOptions] = useState({
        smsConfirmation: true,
        cancellationCover: false,
    });

    const handleChange = (e) => {
        setOptions({
            ...options,
            [e.target.name]: e.target.checked,
        });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Vehicle Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 font-medium">Make*</label>
                    <input type="text" placeholder="Enter Make here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium"> Model*</label>
                    <input type="text" placeholder="Enter Model here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Color*</label>
                    <input type="text" placeholder="Enter Color here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Reg No*</label>
                    <input type="text" placeholder="Enter Reg No* here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />

                </div>

                <div>
                    <label className="block mb-1 font-medium">Mobile Number*</label>
                    <input type="text" placeholder="Enter Mobile number here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">People*</label>
                    <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
                        <option value="">Select a People</option>
                        <option value="APC251">1</option>
                        <option value="APC251">2</option>
                        <option value="APC251">3</option>
                        <option value="APC251">4</option>
                        <option value="APC251">5</option>
                        <option value="APC251">6</option>
                        <option value="APC251">7</option>
                        <option value="APC251">8</option>
                        <option value="APC251">9</option>
                        <option value="APC251">10</option>
                    </select>
                </div>

            </div>



            <div className="border border-gray-300 rounded-lg p-4 space-y-3 bg-white shadow-sm max-w-xl">
      <label className="flex items-start gap-2 text-gray-800">
        <input
          type="checkbox"
          name="smsConfirmation"
          checked={options.smsConfirmation}
          onChange={handleChange}
          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span>
          <strong>Text Message Confirmation</strong> – (UK mobiles only) £0.99
        </span>
      </label>

      <label className="flex items-start gap-2 text-gray-800">
        <input
          type="checkbox"
          name="cancellationCover"
          checked={options.cancellationCover}
          onChange={handleChange}
          className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span>
          <strong>Cancellation Cover</strong> – Protect your booking if you need to cancel or amend in future £2.00
        </span>
      </label>
    </div>

        </div>
    );
}

export default VehicleDetails;
