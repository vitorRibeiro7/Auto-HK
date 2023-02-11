import { BsFillPencilFill, BsFillTagFill } from 'react-icons/bs'


function Footer({ sold, click }: any) {
    return (
        <div className="w-full bg-blue-100 p-4 px-6 flex justify-between items-center border-t-2 border-blue-600">
            <button className='flex gap-4 w-36 justify-between items-center flex-row bg-blue-600 text-white p-3 font-semibold' onClick={click}>
                Editar
                <BsFillPencilFill />
            </button>
            <BsFillTagFill className={`${sold ? "text-blue-600" : "text-zinc-800"} h-8 w-8`} />
        </div>
    )
}

export default Footer;