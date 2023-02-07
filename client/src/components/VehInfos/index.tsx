function VehInfos({ vehInfo }: any) {

    const [vehInfoItem] = vehInfo;

    return (
        <div className="flex flex-col gap-[2vw] bg-slate-100 h-full min-w-full p-6">
            {/* <button onClick={showInfos}>teste</button> */}
            <div>
                <p className="text-2xl font-bold text-[1.7vw] text-blue-600">{vehInfoItem.name}</p>
            </div>
            <div className="w-full flex flex-row justify-start flex-wrap">
                <div className="w-[7vw]">
                    <p className="text-zinc-600 text-[1vw] font-semibold">Marca</p>
                    <p className="text-zinc-500 text-[1vw]  ">{vehInfoItem.brand}</p>
                </div>
                <div className="ml-24">
                    <p className="text-zinc-600 text-[1vw] font-semibold">Ano</p>
                    <p className="text-zinc-500  text-[1vw]">{vehInfoItem.year}</p>
                </div>
            </div>
            <div className="max-h-52">
                <p className="text-[1vw] font-normal overflow-auto">{vehInfoItem.desc}</p>
            </div>
        </div>
    )
}

export default VehInfos