import { useFormik } from "formik"
import * as Yup from "yup"

const scheme = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório."),
    brand: Yup.string().required("Este campo é obrigatório."),
    year: Yup.number().min(1980).max(2024).required("Este campo é obrigatório."),
    description: Yup.string()
})


function Form({ initialValues, onSubmit, title, flag, onCancel }: { initialValues: any, onSubmit: any, title: string, flag: boolean, onCancel: any }) {

    const formik = useFormik({
        validationSchema: scheme,
        initialValues: initialValues,
        onSubmit: onSubmit
    })

    const handleSold = () => {
        formik.setFieldValue('sold', !formik.values.sold)
    }

    return (
        <div className="w-full h-full flex flex-col items-center p-12 gap-12 bg-slate-50">
            <h1 className="text-2xl">{title}</h1>
            <form className="w-full flex flex-col gap-10" onSubmit={formik.handleSubmit}>
                <div className="flex gap-3 flex-row w-full justify-between">
                    <div className="flex flex-col w-6/12">
                        <label htmlFor="name">Nome</label>
                        <input
                            id="name"
                            placeholder="Onix"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="w-full outline-none border-2 p-2 rounded-lg border-blue-600"
                        />
                    </div>
                    <div className="flex flex-col w-6/12">
                        <label htmlFor="brand">Marca</label>
                        <input
                            id="brand"
                            placeholder="Chevrolet"
                            type="text"
                            value={formik.values.brand}
                            onChange={formik.handleChange}
                            className="w-full outline-none border-2 p-2 rounded-lg border-blue-600" />
                    </div>
                </div>
                <div className="flex flex-row w-full justify-start items-center content-center">
                    <div className="flex flex-col w-full">
                        <label htmlFor="year">Ano</label>
                        <input
                            id="year"
                            placeholder="2022"
                            type="number"
                            value={formik.values.year}
                            onChange={formik.handleChange}
                            className="w-full outline-none border-2 p-2 rounded-lg border-blue-600"
                        />
                    </div>
                </div>
                <div className="">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value={formik.values.sold}
                            checked={formik.values.sold}
                            onChange={handleSold}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900">Vendido</span>
                    </label>
                </div >
                <div className="flex flex-row w-full justify-start items-center content-center">
                    <div className="flex flex-col w-full h-auto">
                        <label htmlFor="description">Descrição</label>
                        <div className="w-max-full">
                            <textarea
                                id="description"
                                placeholder="Carro bom :v"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                className="p-2 border-2 border-blue-600 focus:outline-1 focus:outline-blue-500 resize-none h-[160px] rounded-md w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-center gap-8">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        {flag ? "Confirmar" : "Adicionar"}
                    </button>
                    <button type="button" className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Form;