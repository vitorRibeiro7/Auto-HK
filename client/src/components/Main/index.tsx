import List from "../List"
import Search from "../Search"
import Header from "./Header"

function Main() {
    return (
        <main className="flex justify-center p-10 flex-col items-center">
            <div className="w-10/12 h-auto p-5 flex flex-col flex-nowrap items-center">
                <div className="bg-slate-50 w-full h-auto flex justify-center">
                    <Header />
                </div>
                <div className=" w-full h-auto flex flex-row bg-cyan-300">
                    <div className="h-auto w-1/2 p-5 bg-slate-50 flex flex-col justify-between ITEM">
                        <div className="h-96 overflow-y-scroll">
                            <List />
                        </div>
                        <Search />
                    </div>
                    <div className="h-auto w-1/2 p-5 bg-slate-50 flex flex-col">

                    </div>
                </div>
            </div>
        </main >
    )
}

export default Main