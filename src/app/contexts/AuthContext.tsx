'use client'
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import  { useRouter } from 'next/navigation'
import { api } from "../data/api";


import { User } from "phosphor-react";
import toast from "react-hot-toast";

type User = {
  id: string;
  nome: string;
  email: string;
  data_nascimento: string;
  created_at:string;
  administrador:boolean ;
}



type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (form: FormData) => Promise<number>;
  signOut:()=>Promise<void>;

}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
const [user, setUser] = useState<User | null>(null)
const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()


    useEffect(() => {
      const { 'nextauth.token': token } = parseCookies()
      if (token) {
        api('/faperfil', {method: 'GET',headers:{
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+token
        
        }} )
        .then((response) => response.json())
        .then((data) =>{
          setUser(data.faUsuario)
          setIsAuthenticated(true)
          })
        }
  }, [])

   async function signIn(form: FormData) {
    const emailLogin = form.get('grid-email')
    const passwordLogin = form.get('grid-password')
//fazer o login de fato na api e guardar o token e depois bater na rota get faperfil para ter as informaceos do usuario 
    const result =  await api('/fasesao', {method: 'POST',headers:{"Content-Type": "application/json"}, body: JSON.stringify({
      email: emailLogin,
      password: passwordLogin
    })} )

    if (result.status !== 200){
      toast.error('Usuario/senha Invalidos')
      return 400
    }

    const {token}  =  await result.json()

   
 



    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
     /*  maxAge:  60 * 5, // 10 min */
    })

    const resultUser =  await api('/faperfil', {method: 'GET',headers:{"Content-Type": "application/json", 'Authorization': 'Bearer '+token }} )

    const {faUsuario}  =  await resultUser.json()

    setUser(faUsuario)
    setIsAuthenticated(true)
    router.push('/dashboard'); 
    return 200
  }
  async function signOut() {
    destroyCookie(undefined, 'nextauth.token')
  
    setIsAuthenticated(false)
    router.push('/'); 
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}