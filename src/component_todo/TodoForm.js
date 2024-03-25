import React, {useState} from 'react'

export default function TodoForm({setTodoItems,addHAndler}) {
const [todoItem, setTodoItem] = useState("")
 function handleSubmit(e){
   e.preventDefault();
    addHAndler(todoItem);
    setTodoItem("")
 }

  return (
   <>
    <form onSubmit={handleSubmit} >
        <label htmlFor="new-item" className='block my-2'>New Item</label>
        <input type="text" id='new-item' value={todoItem} onChange={e=>setTodoItem(e.target.value)} className='block w-full text-blue-100  bg-gray-600 border border-slate-500 border-solid rounded-md mb-2'/>
        <button className='border border-blue-100 border-solid rounded-md m-auto mt-1.5 w-full'>Add Item</button>
    </form>  
   </>
  )
}
