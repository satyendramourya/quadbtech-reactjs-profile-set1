import React from 'react'
import {  useNavigate } from 'react-router-dom'

const JobCard = ({job}) => {
    const { job_title, employer_name, job_employment_type, job_state, job_country, job_id } = job

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/jobs/${job_id}`, {
            state: {
                item: job,
            }
        })
    }

    return (
        <div className='border border-gray-600 p-2 rounded-md flex flex-col md:flex-row gap-2 md:gap-6 justify-between md:items-center shadow-lg'>
            <div className=' flex flex-col gap-1'>
                <h1 className='font-semibold text-sm md:text-base' >{job_title}</h1>
                <div className='flex gap-2 justify-between items-center'>
                    <p className='text-xs md:text-sm'>{employer_name}</p>
                    <div className=' text-[12px] bg-gray-200 font-semibold py-1 px-2 rounded-md text-xs md:text-sm'><p>{job_employment_type}</p></div>
                </div>
                <p>{job_state}, {job_country}</p>
            </div>
            <button className='text-sm bg-blue-300  py-2 w-full md:max-w-[90px] px-1 md:px-2 rounded-md active:scale-90' onClick={handleDetails}> view Details</button>
        </div>
    )
}

export default JobCard