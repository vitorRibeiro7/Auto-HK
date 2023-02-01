import { IoMdAddCircle } from "react-icons/io";

function Header() {
    return (
        <div className=" bg-slate-50 w-full flex flex-row justify-between px-10 py-2 items-center border-b-2 border-blue-600">
            <h1 className="font-extrabold text-blue-600 text-xl"> Veículo</h1 >
            <button className="text-blue-600 p-1"><IoMdAddCircle className="w-10 h-10" /></button>
        </div >
    )
}

export default Header