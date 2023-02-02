import List from "../List"
import Search from "../Search"
import Header from "./Header"
import VehInfos from "../VehInfos"

import { useState, useEffect } from "react"
import { api } from "../../services/api"

interface vehicleInfos {
    name: string;
    brand: string;
    year: number;
    sold: boolean;
}

function Main() {

    const [vehicleInfos, setVehicleInfos] = useState<vehicleInfos[]>([])

    const getVeh = async () => {
        try {
            const { data } = await api.get(`/vehicle/1`);
            setVehicleInfos(data)
            console.log(data)
        } catch (error) {
            console.log(error);
        } finally {
        }
    }

    useEffect(() => {
        getVeh()
    }, [])

    return (
        <main className="flex justify-center flex-col items-center w-full h-full">
            <div className="w-10/12 h-5/6 p-5 flex flex-col flex-nowrap items-center justify-center bg-slate-50">
                <div className="bg-slate-50 w-full h-1/6 flex justify-center">
                    <Header />
                </div>
                <div className=" w-full h-5/6 flex flex-row bg-cyan-300">
                    <div className="h-full w-1/2 p-5 bg-slate-50 flex flex-col justify-between">
                        <div>
                            <p>Lista de Veiculos</p>
                        </div>
                        <div className="h-full overflow-y-scroll">
                            <List />
                        </div>
                        <div>
                            <Search />
                        </div>
                    </div>
                    <div className="h-full w-1/2 p-5 bg-slate-50 flex flex-col justify-between">
                        <div>
                            <p>Detalhes</p>
                        </div>
                        <div className="h-full">
                            <VehInfos vehInfo={vehicleInfos} />
                        </div>
                        <div>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main