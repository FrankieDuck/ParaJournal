
import React, {useState} from 'react'
import ToDo from './ToDo'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
    }
    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item )))
}

  return (
    
    <div id="current_investigation">
     <h1 style={{ color: 'white', justifyContent: 'center', alignContent: 'center', display: 'flex', }}> Current Investigation  </h1>
      <TodoForm onSubmit={addTodo} />
       <ToDo 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo} 
        updateTodo={updateTodo}
    />
    </div>
  )
}

export default TodoList