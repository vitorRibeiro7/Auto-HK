import Modal from "../Modal"
import Form from "../Form";

import { api } from "../../services/api";

interface valuesType {
    name: string;
    brand: string;
    year: number;
    description: string;
    sold: boolean;
}

function CreateModal({ isOpen, onClose }: any) {


    const initialValues = {
        name: "",
        brand: "",
        year: 1980,
        description: "",
        sold: false
    }

    const handleSubmit = async (values: valuesType) => {

        console.log(values)

        try {
            await api.post("/vehicle", {
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
            <Form initialValues={initialValues} onSubmit={handleSubmit} onCancel={onClose} title="Adicionar Veiculo" flag={false} />
        </Modal>
    )
}

export default CreateModal;