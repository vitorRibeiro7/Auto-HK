
function VehInfos({ vehInfo }: any) {
    return (
        <div className="flex flex-col gap-1 h-auto mb-4">
            <h1>{vehInfo.name}</h1>
            <p>{vehInfo.year}</p>
        </div>
    )
}

export default VehInfos