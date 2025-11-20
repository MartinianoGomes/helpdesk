import { useForm, type SubmitHandler } from "react-hook-form"
import imgHeader from "./assets/NavHeader.png"
import { Link } from "react-router"

type Inputs = {
    name: string,
    email: string,
    password: string
}

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {console.log(data)};
    console.log(watch("name"));
    console.log(watch("email"));
    console.log(watch("password"));

    return (
        <div className="flex min-h-screen md:place-content-end">  
            <div className="flex flex-col justify-center items-center bg-white p-8 mt-5 rounded-t-[20px] md:rounded-tr-none space-y-4 shadow-md w-full md:w-1/2">
                <div>
                    <img src={imgHeader} className="w-[157px] mb-[32px]" />
                </div>

                <div className="space-y-3 min-w-[380px]">
                    <div className="border-[1px] border-gray-200 rounded-[10px]">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-[28px]">
                            <div className="mb-[40px]">
                                <h1 className="font-bold text-[20px]">Crie sua conta</h1>
                                <p className="text-[var(--gray-300)]">Informe seu nome, e-mail e senha</p>
                            </div>

                            <div>
                                <div>
                                    <p className="text-[var(--gray-300)]">NOME</p>
                                    <input 
                                    {...register("name")} 
                                    className="w-full py-[8px] border-b border-gray-300 mb-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Digite seu nome completo"
                                    />
                                </div>

                                <div>
                                    <p className="text-[var(--gray-300)]">E-MAIL</p>
                                    <input 
                                    {...register("email")} 
                                    className="w-full py-[8px] border-b border-gray-300 mb-[16px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="exemplo@gmail.com"
                                    />
                                </div>

                                <div>
                                    <p className="text-[var(--gray-300)]">SENHA</p>
                                    <input 
                                    {...register("password", {required: true})} 
                                    className="w-full py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Digite sua senha"
                                    />
                                    <p className="text-[12px] text-[var(--gray-300)]">Mínimo de 6 dígitos</p>
                                </div>

                                {errors.password && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                            </div>

                            <input 
                                type="submit" 
                                className="w-full bg-gray-500 hover:bg-gray-800  text-white py-2 rounded-md  cursor-pointer transition font-bold"
                                value="Cadastrar"
                            />
                        </form>
                    </div>

                    <div className="border border-gray-200 rounded-[10px] space-y-[24px] p-[28px]">
                        <div>
                            <h1 className="font-bold text-[16px]">Já tem uma conta?</h1>
                            <h3 className="text-[12px] text-[var(--gray-300)]">Entre agora mesmo</h3>
                        </div>

                        <Link to="/helpdesk/" className="inline-block text-center w-full text-black bg-gray-200 py-2 hover:bg-gray-600 hover:text-white rounded-md cursor-pointer transition font-bold">Acessar conta</Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Register;