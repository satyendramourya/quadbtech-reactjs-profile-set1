import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addAppliedFormUserData } from '../redux/getUserSlice';

const JobApplicationForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        coverLetter: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        dispatch(addAppliedFormUserData(formData));
        navigate(`/jobs/success`)
    };

    return (
        <div className="max-w-lg mx-auto container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Job Application Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="coverLetter" className="block mb-2">Cover Letter Note:</label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="resume" className="block mb-2">Resume (PDF):</label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf"
                
                        className="border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApplicationForm;
