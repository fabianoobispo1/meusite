'use client'

import { useState } from "react"
import { api } from "../data/api"

export function FormRegister() {
  const [nomeBorda, setNomeBorda] = useState('border-gray-200')
  const [emailBorda, setEmailBorda] = useState('border-gray-200')
  const [nascimentoBorda, setNascimentoBorda] = useState('border-gray-200')
  const [passwordBorda, setPasswordBorda] = useState('border-gray-200')

  async function handleRegsiter(form: FormData){
    setNomeBorda('border-gray-200')
    setEmailBorda('border-gray-200')
    setNascimentoBorda('border-gray-200')
    setPasswordBorda('border-gray-200')

    const nome = form.get('grid-name')
    const email = form.get('grid-email')
    const nasciemnto = form.get('grid-nascimento')+'T00:00:00.000Z'
    const password = form.get('grid-password')
    if(!nome ) {
      setNomeBorda('border-red-300') 
    return 
    }
    if(!email ) {
      setEmailBorda('border-red-300') 
    return 
    }
    if(!nasciemnto ) {
      setNascimentoBorda('border-red-300') 
    return 
    }
    if(!password ) {
      setPasswordBorda('border-red-300') 
    return 
    }
    console.log(nasciemnto)
    //delay 3 segundos 
    //await new Promise(resolve => setTimeout(resolve, 3000))

      
    await api('/fausuario', {method: 'POST',headers:{"Content-Type": "application/json"}, body: JSON.stringify({
      nome,
      data_nascimento:nasciemnto,
      email,
      password
    })} )
/*
    revalidateTag('listartodo') */
  }

  return(

    <form className=" w-full " action={handleRegsiter} method='POST'>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Nome
        </label>
        <input 
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${nomeBorda} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
          name='grid-name'
          type="text"
           /* placeholder="Seu nome" */ 
          />
        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
      </div>
      <div className="w-full md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Email
        </label>
        <input 
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${emailBorda} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          name="grid-email" 
          type="text" 
          placeholder="" 
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">      
      <div className="w-full md:w-1/2  px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Data nascimento
        </label>
        <input 
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${nascimentoBorda} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          name="grid-nascimento" 
          type="date" 
        />
        <p className="text-gray-600 text-xs italic">Minimo de 6 caracteres entre letras e numeros</p>
      </div>

      <div className="w-full md:w-1/2  px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Senha
        </label>
        <input 
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${passwordBorda} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          name="grid-password" 
          type="password" 
          placeholder="******************" />
        <p className="text-gray-600 text-xs italic">Minimo de 6 caracteres entre letras e numeros</p>
      </div>
    </div>
 {/*    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          City
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          State
        </label>
        <div className="relative">
          <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
          Zip
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
      </div>
    </div> */}

    <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"   type="submit">
          Cadastrar
        </button>      
    </div>
  </form>
  
  )
}