import React from 'react'

function TodoItem({ todo, onToggle }) {
  return (
    <div className='todo-item' style={{ textDecoration: todo.completed ? 'line-through' : 'none', opacity: todo.completed ? 0.5 : 1 }}>
      {todo.text}

      <button onClick={() => { onToggle(todo.id) }}>{todo.completed ? 'Incomplete' : 'Complete'}</button>
    </div>
  )
}

export default TodoItem