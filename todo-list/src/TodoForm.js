import React, { useState } from 'react'

function TodoForm({onAddTodo}) {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') return;

        onAddTodo(inputValue);
        setInputValue('');
    }

  return (
    <form className='todo-form'onSubmit={handleSubmit} >
        <input type='text' placeholder='අලුත් වැඩක් ඇතුළත් කරන්න...' value={inputValue}  onChange={(e)=> setInputValue(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm