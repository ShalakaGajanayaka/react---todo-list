import React from 'react'

function TodoItem({todo}) {
  return (
    <div className='todo-item' style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
    </div>
  )
}

export default TodoItem