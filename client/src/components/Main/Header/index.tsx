import { IoMdAddCircle } from "react-icons/io";

function Header({ click }: any) {
    return (
        <div className="bg-slate-50 w-full flex flex-row justify-between px-10 py-2 items-center border-b-2 border-blue-600">
            <h1 className="font-black text-blue-600 text-2xl">Auto-HK</h1>
            <button className="text-blue-600 p-1" onClick={click}><IoMdAddCircle className="w-10 h-10" /></button>
        </div >
    )
}

export default Header