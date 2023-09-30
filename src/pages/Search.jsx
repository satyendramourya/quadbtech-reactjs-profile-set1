
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  const [searchedLang, setSearchedLang] = useState('')

  useEffect(() => { }, [searchedLang])

  const handleJobSearch = (e) => { 
    e.preventDefault();
    navigate('/jobs', {
      state: { searchedLang }
    });
  }



  return (
    <div className='flex mt-7 items-center justify-center '>

      <div className="w-full max-w-xl p-5 lg:p-0">
        <form>
          <div className="w-full">
            <input type="text" name="searchedText" className="shadow appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none inline w-full  
          border-transparent  focus:bg-white border focus:border-gray-400
          " placeholder="eg. Senior React Developer"
          onChange={(e)=>setSearchedLang(e.target.value)}  />
          </div>
          
          <div className="text-center mt-5">
            <button className="text-white font-bold text-xl py-2 px-4 rounded w-full bg-blue-700 opacity-75  cursor-not-allowed" onClick={handleJobSearch}>Search</button>
            <button className="text-gray-200 font-bold text-xl py-2 px-4 rounded w-full bg-gray-500 shadow-xl hover:shadow-xl active:shadow active:text-white active:bg-gray-600  mt-5">Clear Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search