import React from 'react'
import TodoItem from './TodoItem'

export default function Todolist({todoItems, deleteTodo, toggleTodo}) {
  return (
    <>
      <h3 className='mt-6 mb-1'>ToDo list</h3>
      <ul>
        {todoItems.length === 0 && 'No todos'}
        {todoItems.map(todo=>{
            return(
              <TodoItem {...todo} toggleTodo={toggleTodo} 
              deleteTodo={deleteTodo} key={todo.id}/>
            )
        })}
      </ul>
    </>
  )
}
