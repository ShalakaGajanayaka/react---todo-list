import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggleTodo }) {
  return (
    <div className='todo-list'>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} />
      ))}
    </div>
  )
}

export default TodoList