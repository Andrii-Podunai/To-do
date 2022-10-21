import React, { useState } from 'react'
import CreareTodo from './create-todo-field/CreareTodo'
import TodoItem from './Item/TodoItem'

const data = [
  {
    id:"1",
    title:"Finish work on the today",
    isCompleted: false,
  },
  {
    id:"2",
    title:"Read next punkts on the tomorrow",
    isCompleted: false,
  },
  {
    id:"3",
    title:"Send your work ",
    isCompleted: false,
  }
]

const Home = () => {

  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }
  const removeTodo = (id) => { 
    const copy =([...todos].filter(t => t.id != id))
    setTodos(copy)
  }
  

  return (
    <div  className='w-4/5 mx-auto text-white'>
      <h1 className='text-center font-bold text-2xl mb-10 '>Program ToDo</h1>
      {todos.map(todo =>
        <TodoItem key={todo.id} 
        changeTodo = {changeTodo} 
        todo = {todo}
        removeTodo = {removeTodo}
        ></TodoItem>
        )}
        <CreareTodo setTodos = {setTodos}/>
    </div>
  )
}

export default Home