import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


function Search() {

    const [toSearch, setToSearch] = useState("")

    const handleSearch = (e: any) => {
        setToSearch(e.target.value)
    }

    return (
        <div className='w-auto h-auto rounded-md bg-slate-50 justify-center pl-5 flex border-blue-600 border-2 font-semibold'>
            <input
                value={toSearch}
                onChange={handleSearch}
                type="text"
                placeholder="Buscar veículo"
                className="h-12 rounded-md outline-none bg-slate-50 text-blue-600 placeholder-zinc-500"
            />
            <button className='p-4 bg-blue-600'><FaSearch className=' text-slate-50' /></button>
        </div>
    )
}

export default Search