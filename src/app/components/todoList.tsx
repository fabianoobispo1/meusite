
import { api } from '@/app/data/api'
import { parseCookies } from 'nookies'
import { CheckCircle, Trash  } from 'phosphor-react'
import { useEffect } from 'react'
interface Todo {
  id: string
  text: string
  isComplete: boolean
  created_at: string
  updatedAt: string
}

export async function TodoList() {


  //delay 3 segundos 
  await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await api('/todolistar', {next:{tags:['listartodo']}})

  const {todos} = await response.json()

  return( 
      <>
      {todos.map((todo: Todo) => 
            <div key={todo.id} className="flex items-center mb-2">
      
            <p className='px-3'>{todo.text} </p>

            </div>
      )}


    {/*      <div className="flex h-7 w-7 items-center   group-hover:border-white/50">
       <CheckCircle size={26} className="text-cyan-900" />
       <Trash size={26} className="text-cyan-900" />
     </div> */}

    
      </>
      
    )

}