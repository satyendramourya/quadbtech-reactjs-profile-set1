import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom'
import { addJobData } from '../redux/getUserSlice';

const FormattedDescription = ({ description }) => {
    // Replace newline characters with HTML line breaks
    const formattedDescription = description.replace(/\n/g, '<br />');

    return <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />;
};


const JobDetails = () => {
    const location = useLocation();
    const jobDetail = location.state.item;

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleApplication = () => { 
        console.log('applied');
        dispatch(addJobData(jobDetail));
        navigate(`/jobs/${jobDetail.job_id }/apply`)
    }

    return (
        <div className='max-w-5xl mx-auto p-3'>
            <div className='max-w-3xl mx-auto border border-gray-600 p-2 rounded-md flex flex-col md:flex-row gap-2 md:gap-6 justify-between md:items-center shadow-lg m-3'>
                <div className=' flex flex-col gap-1 '>
                    <h1 className='font-semibold text-sm md:text-base' >{jobDetail.job_title}</h1>
                    <div className='flex gap-2 justify-between items-center'>
                        <p className='text-xs md:text-sm'>{jobDetail.employer_name}</p>
                        <div className=' text-[12px] bg-gray-200 font-semibold py-1 px-2 rounded-md text-xs md:text-sm'><p>{jobDetail.job_employment_type}</p></div>
                    </div>
                    <p>{jobDetail.job_state}, {jobDetail.job_country}</p>
                </div>
                <button className='text-sm bg-blue-300  py-2 w-full md:max-w-[90px]  px-1 md:px-2 rounded-md active:scale-90' onClick={handleApplication}> Apply</button>
            </div>
            <div>
                <h1>Description:</h1>
                <FormattedDescription description={jobDetail.job_description} />
            </div>

        </div>
    )
}

export default JobDetails