import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm';
import Todolist from './Todolist';

export default function Todo() {
    const[todoItems,setTodoItems] = useState(()=>{
        const localItems = localStorage.getItem("todosLocal")
        if(localItems == null) return []
        return JSON.parse(localItems)
    });

    useEffect(()=>{
        localStorage.setItem("todosLocal", JSON.stringify(todoItems));
    },[todoItems])

    function addHAndler(title){
        setTodoItems(currentItem=>{
            return [
                ...currentItem,
                { id: crypto.randomUUID(), title,completed:false},
            ]
        })
    }
    function toggleTodo(id,completed){
        setTodoItems(currentTodo=>{
        return currentTodo.map(item=>{
            if(item.id ===id){
            return { ...item, completed}
            } 
            return item
        })
        })
    }
    function deleteTodo(id){
        setTodoItems(currentTodo=>{
            return currentTodo.filter(todo=> todo.id !==id)
        }) 
    }
  return (
    <div className='to-do-container flex justify-center items-center h-screen text-blue-100 bg-slate-950 font-mono'>
     <div className='to-do-container--wrapper w-80 border border-gray-700 border-solid rounded-xl p-2'>
     <TodoForm setTodoItems={setTodoItems} todoItems={todoItems} addHAndler={addHAndler}/>
     <Todolist toggleTodo={toggleTodo} deleteTodo={deleteTodo} todoItems={todoItems} />
     </div>
    </div>
  )
}
