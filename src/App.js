import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import Input from "./components/Input";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  console.log(todo)


  useEffect(()=>{

    const localTodos = JSON.parse(localStorage.getItem("todos"))
    setTodos(localTodos)
    
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTodos = () =>{
   
    todo!== "" && setTodos([...todos, todo])
    setTodo("")
  }

  const deleteTodo = (i) =>{
    
    setTodos(()=> todos.filter((_, index) => index !== i))
  }

  console.log(todos)

  return (
    <div className="flex items-center justify-center mt-1 ">
        <div className="w-[500px] h-[400px] bg-indigo-500 rounded-lg ">
          <div className="text-center text-white tracking-wider border-b-2 border-indigo-300">TODO LİST</div>
          <Input setTodo={setTodo} todo={todo} addTodos={addTodos}/>
          <Todos todos={todos} deleteTodo={deleteTodo}/>
        </div>
    </div>
  );
}

export default App;
