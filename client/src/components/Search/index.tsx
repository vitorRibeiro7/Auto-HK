import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


function Search() {

    const [toSearch, setToSearch] = useState("")

    const handleSearch = (e: any) => {
        setToSearch(e.target.value)
    }

    return (
        <div className='bg-slate-50 flex justify-between border-blue-600 border-2 font-semibold shadow-md'>
            <div className='w-full flex items-center'>
                <input
                    value={toSearch}
                    onChange={handleSearch}
                    type="text"
                    placeholder="buscar veículo"
                    className="w-full h-full items-center justify-center pl-4 pr-2 ounded-md outline-none bg-slate-50 text-blue-600 placeholder-zinc-500 font-medium"
                />
            </div>
            <button className='p-4 bg-blue-600'><FaSearch className=' text-slate-50' /></button>
        </div>
    )
}

export default Search