import React from 'react'

const Input = ({setTodo,todo,addTodos}) => {
  return (
  

          <div className="flex items-center justify-normal p-1 space-x-1">
            <input onChange={(e)=> setTodo(e.target.value)} value={todo} className="w-4/5 outline-none rounded-md p-1 h-7 text-sm"  placeholder="Yaz..."/>
            <button onClick={addTodos}  className="w-1/5 h-7 text-white cursor-pointer bg-indigo-800 rounded-md hover:bg-indigo-950">EKLE</button>
          </div>

  )
}

export default Input