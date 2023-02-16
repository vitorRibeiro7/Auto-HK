import Modal from "../Modal"
import Form from "../Form";

import { api } from "../../services/api";
import { useState } from "react";

interface valuesType {
    name: string;
    brand: string;
    year: number;
    description: string;
    sold: boolean;
}

function ConfirmModal({ isOpen, onClose, vehicle }: any) {

    const [loadingButton, setLoadingButton] = useState(false)

    const handleDelete = async () => {
        try {
            await api.delete(`/vehicle/${vehicle[0].id}`, {

            });

            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col w-full justify-center items-center gap-6">
                <h1 className="text-center text-2xl">Tem certeza que deseja deletar <b>{vehicle[0] ? vehicle[0].name : "none"}</b>? </h1>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-4">
                        <button type="submit" className="w-32 flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleDelete}>
                            Confirmar
                        </button>
                        <button type="button" className="w-32 flex items-center justify-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                    <p className="text-center text-sm text-zinc-500">** Esta ação é irreversível **</p>
                </div>
            </div>
        </Modal >
    )
}

export default ConfirmModal;