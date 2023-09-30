import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Success = () => {
    const navigate = useNavigate();

    const jobData = useSelector(state => state.jobMe.jobData)
    const appliedFormUserData = useSelector(state => state.jobMe.appliedFormUserData)

    console.log("appliedFormUserData", appliedFormUserData)


    // Function to handle navigation to the "Search Job" page
    const handleSearchNavigation = () => {
        navigate('/search');
    };


    return (
        <div className='max-w-5xl mx-auto p-3'>
            <div className='mx-auto flex items-center justify-center border-b border-b-gray-500 p-3'>
                <h1 className='text-green-400 font-bold text-3xl'>Applied Successfully!!</h1>
            </div>
            <div>
                <div className='max-w-3xl mx-auto border border-gray-600 p-2 rounded-md flex flex-col md:flex-row gap-2 md:gap-6 justify-between md:items-center shadow-lg m-3'>
                    <div className=' flex flex-col gap-1 '>
                        <h1 className='font-semibold text-sm md:text-base' >{jobData.job_title}</h1>
                        <div className='flex gap-2 justify-between items-center'>
                            <p className='text-xs md:text-sm'>{jobData.employer_name}</p>
                            <div className=' text-[12px] bg-gray-200 font-semibold py-1 px-2 rounded-md text-xs md:text-sm'><p>{jobData.job_employment_type}</p></div>
                        </div>
                        <p>{jobData.job_state}, {jobData.job_country}</p>
                    </div>
                </div>

                <div className='m-2'>
                    <h2>Application Preview</h2>
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-semibold mb-4">Job Application Form</h1>
                        <form >
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={appliedFormUserData.name}
                                    disabled
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
                                    value={appliedFormUserData.email}
                                    disabled
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="coverLetter" className="block mb-2">Cover Letter Note:</label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={appliedFormUserData.coverLetter}
                                    disabled
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows="4"
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                <button className='text-sm bg-blue-300  py-2 w-full md:max-w-[90px] px-1 md:px-2 rounded-md active:scale-90' onClick = { handleSearchNavigation }>Seacrh Job</button>
                
            </div>
        </div>
    )
}

export default Success