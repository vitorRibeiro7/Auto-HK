import List from "../List"
import Search from "../Search"
import Header from "./Header"
import VehInfos from "../VehInfos"
import Footer from "../Footer"

import { useState, useEffect } from "react"
import { api } from "../../services/api"
import Loading from "../Loading"

import CreateModal from "../CreateModal"
import EditModal from "../EditModal"

import { BsGithub } from 'react-icons/bs';

interface vehicleInfosTypes {
    name: string;
    description: string;
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
    const [vehicleEdit, setVehicleEdit] = useState<vehicleInfosTypes[]>([])
    const [descLoading, setDescLoading] = useState(true)
    const [list, setList] = useState<ListTypes[]>([])
    const [listSearch, setListSearch] = useState("")
    const [listLoading, setListLoading] = useState(false)
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [sold, setSold] = useState(false)


    const getList = async (toSearch: string) => {
        try {
            setListLoading(true)
            const { data } = await api.get(`/vehicle/find?q=${toSearch}`);
            setList(data)
            console.log(data)
            setListLoading(false)
        } catch (error) {
            console.log(error);
            setListLoading(true)
        } finally {
        }
    }

    const offModal = () => {
        setIsOpenCreateModal(false)
        setIsOpenEditModal(false)
    }

    const handleOpenEdit = () => {
        setVehicleEdit(vehicleInfos)
        setIsOpenEditModal(true)
    }

    function tryToserach(tosearch: string) {
        setListSearch(tosearch)
    }

    useEffect(() => {
        getList(listSearch)
    }, [listSearch])

    useEffect(() => {

        const [vehInfoItem] = vehicleInfos;

        if (!vehInfoItem) return

        setSold(vehInfoItem.sold)

    }, [vehicleInfos]);


    const getVeh = async (vehicle: any) => {
        try {
            setDescLoading(true)
            const { data } = await api.get(`/vehicle/${vehicle.id}`);
            setVehicleInfos(data)
            console.log(data)
            setDescLoading(false)
        } catch (error) {
            console.log(error);
            setDescLoading(true)

        } finally {
        }
    }

    return (
        <main className="flex justify-center flex-col items-center w-full p-4 sm:p-0 h-auto sm:h-5/6">
            <CreateModal isOpen={isOpenCreateModal} onClose={offModal} />
            <EditModal isOpen={isOpenEditModal} onClose={offModal} vehicle={vehicleEdit} />
            <div className="w-10/12 h-auto sm:h-5/6 p-5 flex flex-col flex-nowrap items-center justify-start bg-slate-50">
                <div className="bg-slate-50 w-full h-24 mb-5 flex justify-center">
                    <Header click={() => { setIsOpenCreateModal(true) }} />
                </div>
                <div className=" w-full h-5/6 flex flex-col sm:flex-row">
                    <div className="h-full w-full sm:w-1/2 p-5 bg-slate-50 flex gap-auto flex-col justify-between">
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
                    <div className="h-full w-full sm:w-1/2 p-5 bg-slate-50 flex flex-col justify-between">
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
                        <div className="h-auto">
                            <Footer click={handleOpenEdit} sold={sold} state={descLoading} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4">
                <div className="text-4xl text-slate-200 py-1">
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                        <BsGithub />
                    </a>
                </div>
            </div>
        </main >
    )
}

export default Main