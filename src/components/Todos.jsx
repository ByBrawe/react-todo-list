import React from 'react'

const Todos = ({todos,deleteTodo}) => {
  return (
    <div className="text-xs">
    <div className="p-1 text-white">
        {
          todos.map((dt,i)=>(
            <div key={i} className="flex items-center justify-between">
              <div className="w-4/5">{dt}</div>
              <div className="w-1/5 flex justify-center text-center ">
                      <div onClick={()=> deleteTodo(i)} className="w-4 cursor-pointer bg-indigo-800 rounded-md hover:bg-indigo-950">X</div>
              </div>
          </div>
          ))
        }
      
    </div>
  </div>
  )
}

export default Todos