'use client'
import { AuthContext } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useContext, useState } from "react";

import { FormLogin } from "./components/formLogin";



export default function Home() {
  const [logado, setLogado] = useState(false)

  

    const { signOut, user, isAuthenticated} = useContext(AuthContext)
    const router = useRouter()
    
    const { 'nextauth.token': token } = parseCookies()
    if (token) {
      router.push('/dashboard');
    }
  
  return (
/*     */
  
   /*  <div className="flex rounded-lg bg-slate-400 p-3.5 lg:p-6"> */
   <div className="p-3.5 lg:p-6 flex justify-center gap-0  lg:gap-80"> 

  <FormLogin /> 
        
      <div className=""></div>
      
 </div> 

  /*   </div> */
  
  );
}
