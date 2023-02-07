import List from "../List"
import Search from "../Search"
import Header from "./Header"
import VehInfos from "../VehInfos"

import { useState, useEffect } from "react"
import { api } from "../../services/api"
import Loading from "../Loading"

interface vehicleInfosTypes {
    name: string;
    desc: string;
    brand: string;
    year: number;
    sold: boolean;
}

interface ListTypes {
    id: number;
    brand: string;
    name: string;
    year: number;
    sold: boolean;
}

function Main() {

    const [vehicleInfos, setVehicleInfos] = useState<vehicleInfosTypes[]>([])
    const [descLoading, setDescLoading] = useState(true)
    const [list, setList] = useState<ListTypes[]>([])
    const [listSearch, setListSearch] = useState("")
    const [listLoading, setListLoading] = useState(false)


    const getList = async (toSearch: string) => {
        try {
            setListLoading(true)
            const { data } = await api.get(`/vehicle/find?q=${toSearch}`);
            setList(data)
            // console.log(data)
            setListLoading(false)
        } catch (error) {
            console.log(error);
            setListLoading(true)
        } finally {
        }
    }

    function tryToserach(tosearch: any) {
        setListSearch(tosearch)
    }

    useEffect(() => {
        getList(listSearch)
    }, [listSearch])


    const getVeh = async (vehicle: any) => {
        try {
            setDescLoading(true)
            const { data } = await api.get(`/vehicle/${vehicle.id}`);
            setVehicleInfos(data)
            // console.log(data)
            setDescLoading(false)
        } catch (error) {
            console.log(error);
            setDescLoading(true)

        } finally {
        }
    }

    return (
        <main className="flex justify-center flex-col items-center w-full h-full">
            <div className="w-10/12 h-5/6 p-5 flex flex-col flex-nowrap items-center justify-start bg-slate-50">
                <div className="bg-slate-50 w-full h-24 mb-5 flex justify-center">
                    <Header />
                </div>
                <div className=" w-full h-5/6 flex flex-row-reverse flex-wrap">
                    <div className="h-full w-1/2 p-5 bg-slate-50 flex flex-col justify-between">
                        <div className="h-auto">
                            <p className="text-zinc-600 font-medium">Detalhes</p>
                        </div>
                        <div className="h-full flex justify-center items-center">
                            {
                                !descLoading ?
                                    <VehInfos vehInfo={vehicleInfos} />
                                    :
                                    <Loading />
                            }
                        </div>
                    </div>
                    <div className="h-full w-1/2 p-5 bg-slate-50 flex gap-auto flex-col justify-between">
                        <div className="h-[80%]">
                            <div className="h-auto">
                                <p className="text-zinc-600 font-medium">Lista de Veiculos</p>
                            </div>
                            <div className="h-full overflow-y-scroll">
                                <List click={getVeh} list={list} loading={listLoading} />
                            </div>
                        </div>
                        <div className="h-auto">
                            <Search onchange={tryToserach} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main