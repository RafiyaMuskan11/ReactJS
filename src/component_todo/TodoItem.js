import React from 'react'

export default function TodoItem({completed,id,title, deleteTodo, toggleTodo}) {
  return (
    <>
      <li className='flex justify-between items-end mb-1' id={id}>
        <label htmlFor="">
            <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>{title}
        </label>
        <button className='text-red-900 bg-transparent  border border-red-900 border-solid rounded-md px-1' 
        onClick={()=>deleteTodo(id)}>Remove</button>
      </li>
    </>
  )
}
