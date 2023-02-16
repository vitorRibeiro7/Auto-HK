import { BsFillPencilFill, BsFillTagFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import Loading from '../Loading';

function Footer({ sold, click, state, clickToDelete }: any) {
    return (
        <div className="w-full bg-blue-100 p-4 px-6 flex justify-between items-center border-t-2 border-blue-600">
            <div className='flex flex-row gap-2'>
                <button className={`flex h-12 gap-4 w-36 ${!state ? "justify-between" : "justify-center"} items-center flex-row bg-blue-600 text-white p-3 font-semibold disabled:bg-zinc-800`} onClick={click} disabled={state}>
                    {!state ?
                        <>
                            Editar
                            < BsFillPencilFill className={`h-4 w-4`} />
                        </>
                        :
                        <svg className="w-5 h-5  text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>}
                </button>
                <button className={`flex h-12 gap-4 w-36 ${!state ? "justify-between" : "justify-center"} items-center flex-row bg-red-600 text-white p-3 font-semibold disabled:bg-zinc-800`} onClick={clickToDelete} disabled={state}>
                    {!state ?
                        <>
                            Deletar
                            <AiFillDelete onClick={clickToDelete} className={`h-6 w-6 cursor-pointer`} />
                        </>
                        :
                        <svg className="w-5 h-5  text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>}
                </button>
            </div>
            <BsFillTagFill className={`${sold ? "text-blue-600" : "text-zinc-800"} h-8 w-8`} />
        </div >
    )
}

export default Footer;