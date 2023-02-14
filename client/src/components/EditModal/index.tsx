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

function EditModal({ isOpen, onClose, vehicle }: any) {

    const [loadingButton, setLoadingButton] = useState(false)

    const initialValues = vehicle

    const handleSubmit = async (values: valuesType) => {

        console.log(vehicle)


        try {
            setLoadingButton(true)

            await api.put(`/vehicle/${vehicle[0].id}`, {
                name: values.name,
                brand: values.brand,
                year: values.year,
                description: values.description,
                sold: values.sold,
            });

            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {vehicle ?
                <Form initialValues={initialValues[0]} onSubmit={handleSubmit} onCancel={onClose} title="Editar Veiculo" flag={true} loading={loadingButton} />
                :
                null
            }
        </Modal>
    )
}

export default EditModal;