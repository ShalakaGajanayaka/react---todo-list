import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: 'React පාඩම් කරන්න', completed: true },
    { id: 2, text: 'To-Do ලැයිස්තුවක් හදන්න', completed: true },
    { id: 3, text: 'ගෙදර වැඩ කරන්න', completed: true }
  ]);

  useEffect(() => {
    const inCompletedTodos = todos.filter(todo => !todo.completed).length;

    if (inCompletedTodos > 0) {
      document.title = `ඔයාට තව වැඩ ${inCompletedTodos}ක් ඉතුරුයි.`;
    } else {
      document.titile = 'සුපිරි! ඔයාගෙ වැඩ ඔක්කොම ඉවරයි. 😀';
    }
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id == id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  }


  const remainingTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className='App'>
      <h1>මගේ වැඩ ලැයිස්තුව (My Todo List)</h1>

      <TodoForm onAddTodo={addTodo} />

      {remainingTodos === 0 ? (
        <h2>සුපිරි! ඔයාගෙ වැඩ ඔක්කොම ඉවරයි. 😀</h2>
      ) : (
        <h2>ඔයාට තව වැඩ {remainingTodos}ක් ඉතුරුයි.</h2>
      )}

      <TodoList todos={todos} onToggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
