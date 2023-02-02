import Card from "./Card"
import { useEffect, useState } from "react"

import { api } from "../../services/api"

interface List {
    id: number;
    brand: string;
    name: string;
    year: number;
    sold: boolean;
}

function List() {

    const [list, setList] = useState<List[]>([])

    const getList = async () => {
        try {
            const { data } = await api.get(`/vehicles`);
            setList(data)
            console.log(data)
        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    const handleClick = (vehicle: object) => {
        console.log(vehicle)
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <div className="flex flex-col gap-1 h-auto mb-4">
            {
                list.map(vehicle => (
                    <Card key={vehicle.id} brand={vehicle.brand} name={vehicle.name} year={vehicle.year} sold={vehicle.sold} click={() => handleClick(vehicle)} />
                )
                )
            }
        </div>
    )
}

export default List