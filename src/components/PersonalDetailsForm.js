// PersonalDetailsForm.js
import React, { useState } from 'react';

const PersonalDetailsForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Personal Details Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="fullName" className="block font-semibold mb-2">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block font-semibold mb-2">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full">Submit</button>
            </form>
        </div>
    );
};

export default PersonalDetailsForm;
