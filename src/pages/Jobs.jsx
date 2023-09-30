import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import JobCard from '../components/JobCard';

const Jobs = () => {

    const location = useLocation();
    const searchedLang = location.state ? location.state.searchedLang : '';
    const [pageNumber, setPageNumber] = React.useState(1);

    console.log(searchedLang);

    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.request({
                    method: 'GET',
                    url: 'https://jsearch.p.rapidapi.com/search',
                    params: {
                        query: `${searchedLang}`, // Modify the query based on the provided language
                        page: pageNumber,
                        num_pages: '1'
                    },
                    headers: {
                        'X-RapidAPI-Key': process.env.REACT_APP_Rapid_API_KEY , // Replace with your RapidAPI key
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                    }
                });
                setJobs(response.data.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        if (searchedLang) {
            fetchJobs(pageNumber);
        }
    }, [searchedLang, pageNumber]);

    console.log(jobs);

    


    return (
        <div className='relative p-4'>
            <div className='flex gap-6 mx-auto max-w-4xl'>
                <h3 className='font-semibold'>Jobs Available for : </h3>
                <h1 className='font-semibold text-blue-700'>{searchedLang}</h1>
            </div>

            <div className='flex flex-col gap-4 max-w-4xl m-3 mx-auto'>
                {
                    jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))
                }
            </div>

            {/* pagination */}
            <div className='fixed bottom-3 right-0 left-0 p-2'>
                <div className='max-w-5xl mx-auto m-2 flex align-middle justify-between '>
                    <button className='p-1 rounded-full bg-blue-100 border border-gray-700 active:scale-95' onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}> <img alt="Free Left  Icon" width="32" src="https://cdn.iconscout.com/icon/free/png-256/free-left-keyboard-arrow-key-direction-30505.png?f=webp&amp;w=256" srcSet="https://cdn.iconscout.com/icon/free/png-256/free-left-keyboard-arrow-key-direction-30505.png?f=webp&amp;w=256 1x, https://cdn.iconscout.com/icon/free/png-256/free-left-keyboard-arrow-key-direction-30505.png?f=webp&amp;w=512 2x"></img> </button>

                    <button className='p-1 rounded-full border bg-blue-100 border-gray-700 active:scale-95' onClick={() => setPageNumber(pageNumber + 1)}><img alt="Free Right  Icon" width="32" src="https://cdn.iconscout.com/icon/free/png-256/free-right-388-475077.png?f=webp&amp;w=256" srcSet="https://cdn.iconscout.com/icon/free/png-256/free-right-388-475077.png?f=webp&amp;w=256 1x, https://cdn.iconscout.com/icon/free/png-256/free-right-388-475077.png?f=webp&amp;w=512 2x"></img> </button>
                </div>
            </div>
        </div>
    )
}

export default Jobs