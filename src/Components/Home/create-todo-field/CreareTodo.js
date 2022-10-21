import React, { useState } from 'react'

const CreareTodo = ({setTodos}) => {
    const [title,setTitle] = useState ("")

    const addTodo = (title) => {
        setTodos (prev =>[
        {
          id:new Date(),
          title,
          isCompleted: false
        },
        ...prev,
      ])
      setTitle('')
      }

  return (
    <div className='p-3 mb-4 mt-20 rounded-3xl border-gray-300 bg-gray-800 items-center flex justify-between w-full'>
        <input
        type='text'
        onChange = {e => setTitle(e.target.value)}
        value = {title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className = 'bg-transparent w-full border-none outline-none'
        placeholder ='Add ToDo'
        />
        </div> 
  )
}

export default CreareTodo