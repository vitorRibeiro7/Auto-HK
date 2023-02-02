import Card from "./Card"
import Loading from "../Loading"

import { useEffect, useState } from "react"

import { api } from "../../services/api"

interface List {
    id: number;
    brand: string;
    name: string;
    year: number;
    sold: boolean;
}

function List({ click }: any) {

    const [list, setList] = useState<List[]>([])
    const [loading, setLoading] = useState(false)

    const getList = async () => {
        try {
            setLoading(true)
            const { data } = await api.get(`/vehicles`);
            setList(data)
            // console.log(data)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(true)
        } finally {
        }
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <div className={`flex flex-col gap-2 h-96 pb-14 w-full mb-4 ${loading ? "items-center justify-center" : ''} `}>

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