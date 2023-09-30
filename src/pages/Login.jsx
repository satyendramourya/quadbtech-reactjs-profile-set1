import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { addUser } from '../redux/getUserSlice';

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    const handleNewUser = () => {
        setNewUser(!newUser)
    }

    const userInfo = useSelector(state => state.jobMe.userInfo)

    const handleLogin = (userData) => {
        const userEmail = userInfo.email
        const userPassword = userInfo.password

        try {
            if (userEmail === userData.email && userPassword === userData.password) {
                alert('Login Successfull')
                navigate(`/search`)
            }
        } catch (error) {
            alert('Login Failed')
        }
    }



    const handleUserData = (e) => {
        e.preventDefault();
        if (newUser) {
            // Handle signup
            const userData = {
                firstName,
                lastName,
                email,
                password,
            };
            dispatch(addUser(userData));
            navigate(`/search`)
        } else {
            // Handle login
            const userData = {
                email,
                password,
            };
            try {
                handleLogin(userData);
            } catch (error) {
                console.log('Login Failed')
            }
        }
    };




    return (
        <section className="m-2 lg:m-24">
            <div className="h-full">
                {/* <!-- Left column container with background--> */}
                <div className="g-6 flex h-full flex-wrap items-center justify-center">
                    <div className="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleUserData}>
                            {
                                newUser && (
                                    <div className='flex gap-6'>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                First Name
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fristname" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                                Last Name
                                            </label>
                                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                    </div>
                                )
                            }
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="abc1@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e) => setPassword(e.target.value)} />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    {
                                        newUser ? 'Sign Up' : 'Sign In'
                                    }
                                </button>
                                <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={handleNewUser}>

                                    {
                                        newUser ? 'Sign In' : 'Sign Up'
                                    }
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login