import Search from "../Search";

function Header() {
    return (
        <div className="w-full h-auto bg-slate-50 p-2 flex justify-around items-center">
            <h1 className="text-3xl font-bold text-blue-600">
                AutoHK
            </h1>
            <Search />
        </div>
    )
}

export default Header;