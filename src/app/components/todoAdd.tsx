
import { api } from '@/app/data/api'
import { revalidateTag } from 'next/cache'


import { CheckCircle, Trash  } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { AddButtonTodo } from './addButtonTodo'
interface Todo {
  id: string
  text: string
  isComplete: boolean
  created_at: string
  updatedAt: string
}

export function TodoAdd() {

   async function handleAddTodo(form: FormData){
    'use server'
    const text = form.get('text')
    if(!text) {
      //melhorar mensagem de erro 
    return 
    }
    
    //delay 3 segundos 
    await new Promise(resolve => setTimeout(resolve, 3000))

     
    await api('/todoadicionar', {method: 'POST',headers:{"Content-Type": "application/json"}, body: JSON.stringify({
      text
    })} )

    revalidateTag('listartodo')
  }
  return( 
    <form className="w-full max-w-sm" action={handleAddTodo} method='POST'>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input 
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
              type="text"   
              name='text'
              placeholder="Tarefa" 
              aria-label="Todo"
            />
            <AddButtonTodo />
          </div>
        </form>
    )

}