import {useForm} from "react-hook-form";
import Alert from "../components/Alert";
import _ from 'lodash'

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(`Data Pendaftar ${data.name} Diterima`)
    }

    return (
        <>
            <div className="text-center">
                <h1 className="text-8xl font-medium tracking-widest mb-8">register</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Nama Lengkap</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...register("name", {
                        required: "Nama lengkap harus diisi",
                        pattern: {
                            value: /^[a-zA-Z\s]*$/,
                            message: "Nama hanya boleh mengandung huruf dan spasi"
                        }
                    })} />
                </div>
                <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...register("email", {
                        required: "Email harus diisi",
                    })} />
                </div>
                <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">No. Handphone</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...register("phone", {
                        required: "No Handphone harus diisi",
                        minLength: {
                            value: 9,
                            message: "No Handphone minimal 9 karakter"
                        },
                        maxLength: {
                            value: 14,
                            message: "No Handphone maximal 14 karakter"
                        }
                    })} />
                </div>
                <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Latar Belakang Pendidikan</label>
                    <div>
                        <div className="flex items-center mb-4">
                            <input type="radio" value="it" name={"education-background"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" {...register("education-background", {
                                required: "Latar pendidikan harus dipilih"
                            })} />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">IT</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" value="non-it" name={"education-background"} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" {...register("education-background", {
                                required: "Latar pendidikan harus dipilih"
                            })} />
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non IT</label>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Kelas Coding yang Dipilih</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"{...register("class", {
                        required: "Kelas coding harus dipilih"
                    })}>
                        <option value="be">Coding Backend With Golang</option>
                        <option value="fe">Coding Frontedn With ReactJS</option>
                        <option value="fs">Fullstack Developer</option>
                    </select>
                </div>
                <div className="mt-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foto Surat Kesungguhan</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" {...register("statement-letter", {
                        required: "Foto surat kesungguhan harus diisi"
                    })}/>

                </div>
                <div className={"mt-2"}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harapan Untuk Coding Bootcamp Ini</label>
                    <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" {...register("message")}/>
                </div>
                {
                    !_.isEmpty(errors) && <div className={"mt-3"}>
                        <Alert variant={"danger"}>
                            <ul>
                                {
                                    Object.keys(errors).map(key =>
                                        <li key={key}>{errors[key].message}</li>
                                    )
                                }
                            </ul>
                        </Alert>
                    </div>
                }
                <div className={"mt-2"}>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Submit
                    </button>
                    <button type="reset" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Reset
                    </button>
                </div>
            </form>
        </>
    )
}

export default RegisterPage