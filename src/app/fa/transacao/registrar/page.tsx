'use client'
import { FormRegisterTransacao } from "@/app/components/formRegisterTransacao";
import { AuthContext } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useContext } from "react";


export default  function Registrar() {
  const { signOut, user, isAuthenticated} = useContext(AuthContext)
  const router = useRouter()
  
  const { 'nextauth.token': token } = parseCookies()
  if (!token) {
    router.push('/');
  }

  return (
    <div className="rounded-lg bg-slate-400 p-3.5 lg:p-6">
      <h1>Realizar cadastro transação</h1>
      <FormRegisterTransacao />
    </div> 
  )
}
