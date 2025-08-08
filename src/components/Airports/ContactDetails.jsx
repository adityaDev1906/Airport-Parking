import React from 'react';

const ContactDetails = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Contact Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 font-medium">Title*</label>
                    <input type="text" placeholder="Mr" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">First Name*</label>
                    <input type="text" placeholder="Enter First Name here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Last Name*</label>
                    <input type="text" placeholder="Enter Fast Name here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email*</label>
                    <input type="text" placeholder="Enter Email here" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300" />

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

            <div className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                Flight Details
                <h2>Do you have Terminal and flight details?</h2>
            </div>

            <div className="text-gray-600 text-sm">
                * By booking in advance you guarantee the best rates and hassle‑free parking.
            </div>


        </div>
    );
}

export default ContactDetails;
