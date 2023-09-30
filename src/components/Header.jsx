import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../redux/getUserSlice'
import {  useNavigate } from 'react-router-dom'

const Header = () => {


    const userName = useSelector(state => state.jobMe.userInfo.fristName)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => { 
        dispatch(removeUser())
        navigate(`/`)
    }

    return (
        <div className=" h-20 bg-white border-b-[1px] border-b-gray-800 font-titlFont sticky top-0 z-50">
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between p-2'>
                <Link to='/'>
                    <div className='mx-2'>
                        Jobme!
                    </div>
                </Link>
                <div className='flex items-center gap-2 md:gap-8'>
                    <ul className=' hidden lg:flex items-center gap-8'>
                        <Link to='/search'>
                            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                        </Link>
                    </ul>
                    
                    
                        <div className='flex gap-2 items-center mr-4'>{userName}
                            <img className='w-8 h-8 rounded-full' src={
                                 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                            } alt="userLogo" />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header