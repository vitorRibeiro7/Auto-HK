import Card from "./Card"
import Loading from "../Loading"

interface VehicleTypes {
    id: number;
    brand: string;
    name: string;
    year: number;
    sold: boolean;
}

function List({ click, list, loading }: { click: (vehicle: VehicleTypes) => void, list: VehicleTypes[], loading: boolean }) {

    return (
        <div className={`flex flex-col gap-2 h-96 w-full mb-4 ${loading ? "items-center justify-center" : ''} `}>

            {
                !loading ?
                    list.map(vehicle => (
                        <Card key={vehicle.id} brand={vehicle.brand} name={vehicle.name} year={vehicle.year} sold={vehicle.sold} click={() => click(vehicle)} />
                    )
                    ) : <Loading />
            }
        </div>
    )
}

export default List