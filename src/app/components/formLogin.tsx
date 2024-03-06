'use client'

import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import toast from "react-hot-toast";

export function FormLogin() {
  const { signIn } = useContext(AuthContext)

  async function handleLogin(form: FormData){

    const email = form.get('grid-email')
    const password = form.get('grid-password')
    if(!email ) {
      toast.error('Email Vazio'); 
    return 
    }
    if(!password ) {
      toast.error('Senha Vazio');
    return 
    }

    //console.log(email, password)
    await signIn(form)

  }
  return(
   
    <form className="w-96 bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4" action={handleLogin}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name='grid-email' type="text" placeholder="Username" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  name='grid-password' type="password" placeholder="******************" />
    {/*     <p className="text-red-500 text-xs italic">Please choose a password.</p>border-red-500
      */} </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Entrar
        </button>
   
        <div className="flex items-center flex-col">
       {/*    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Esqueeceu a Senha?
          </a> */}
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/registrar">
            Cadastrar
          </a>
        </div>
       
      </div>
    </form>
    

  )
}