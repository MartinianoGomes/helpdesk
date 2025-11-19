import { useForm, type SubmitHandler } from "react-hook-form"
import imgHeader from "./assets/NavHeader.png"

type Inputs = {
    login: string,
    loginRequired: string
}

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {console.log(data)};
    console.log(watch("login"));

    return (
        <div className="flex min-h-screen justify-end place-content-end">  
            <div className="bg-white p-8 mt-2 rounded-tl-[20px] space-y-4 shadow-md w-1/2">
                <img src={imgHeader} alt="" />
                <div className=" space-y-4 ">
                    <div className="border-[1px] border-gray-200">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input 
                            {...register("login")} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Login"
                        />
                        <input 
                            {...register("loginRequired", {required: true})} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Login (Required)"
                        />
                        {errors.loginRequired && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
                        <input 
                            type="submit" 
                            className="w-full bg-gray-500 hover:bg-gray-800  text-white py-2 rounded-md  cursor-pointer transition font-bold"
                            value="Entrar"
                        />
                        </form>
                    </div>
                    <div className="border-[1px] border-gray-200">
                        <h1>Ainda não tem uma conta?</h1>
                        <h3>Cadastre agora mesmo</h3>
                        <button
                            className="w-full  text-black bg-gray-200 py-2 hover:bg-gray-600 hover:text-white rounded-md cursor-pointer transition font-bold"
                        >Criar conta</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;