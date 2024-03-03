import { TodoAdd } from '@/app/components/todoAdd'
import { TodoList } from '@/app/components/todoList'
import { AuthContext } from '@/app/contexts/AuthContext'
import { parseCookies } from 'nookies'
import { Suspense, useContext, useEffect } from 'react'


export default async function Listar() {
  //const { isAuthenticated } = useContext(AuthContext)
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  

  return (
    <div className="rounded-lg bg-black p-3.5 lg:p-6">
      <h1 className='py-1'>Listar ToDos</h1>
     
     <Suspense fallback={<p>Carregando Todos...</p>}>
     <TodoList />
     </Suspense>
     
      <TodoAdd />
    </div>
  )
}
