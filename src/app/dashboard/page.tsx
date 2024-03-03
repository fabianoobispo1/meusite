'use client'
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

import { parseCookies } from "nookies"
import { useRouter } from "next/navigation"


export default  function Dashboard() {
  const { signOut, user, isAuthenticated} = useContext(AuthContext)
  const router = useRouter()
  
  const { 'nextauth.token': token } = parseCookies()
  if (!token) {
    router.push('/');
  }




  return (
    <div className="rounded-lg bg-slate-400 p-3.5 lg:p-6">
     <h1>Dashboard</h1>
     <p>{user?.nome}</p>

     <button onClick={()=>{signOut()}}>sair</button>
    </div>
  )
}
