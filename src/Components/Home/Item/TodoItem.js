import React from 'react'
import Check from './Check'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({todo, changeTodo,removeTodo}) => {
  return (
    <div className='p-5 mb-4 rounded-3xl bg-gray-800 items-center flex justify-between w-full'>
      <button className='flex items-center'
      onClick={() => changeTodo (todo.id)}
      >
        <Check  isCompleted = {todo.isCompleted}/>
          <span className={cn({
            'line-through' : todo.isCompleted,
          })}>
            {todo.title}
          </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash className='text-red' />
      </button>
    </div>
  )
}

export default TodoItem
