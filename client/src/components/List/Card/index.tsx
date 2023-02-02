import { BsFillTagFill } from "react-icons/bs";

interface Card {
    brand: string;
    name: string;
    year: number;
    sold: boolean;
    click: any;
}

function Card({ brand, name, year, sold, click }: Card) {

    return (
        <button className="w-[98%] h-full flex justify-between bg-slate-50 items-center px-4 py-2 gap-4 cursor-pointer border border-gray-200 rounded-lg shadow hover:bg-gray-200" onClick={click}>
            <div className="text-left w-full">
                <p className="text-lg text-zinc-800 font-medium text">{brand}</p>
                <p className="text-XL text-blue-600 font-semibold">{name}</p>
                <p className="text-LG text-zinc-700 font-semibold">{year}</p>
            </div>
            <div>
                <BsFillTagFill className={`w-6 h-6 ${!sold ? "text-zinc-800" : "text-blue-600"} `} />
            </div>
        </button>
    )
}

export default Card