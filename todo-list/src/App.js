import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [todos, setTodos] = useState([
    {id:1, text: 'React පාඩම් කරන්න', completed: true},
    {id:2, text:'To-Do ලැයිස්තුවක් හදන්න', completed: false},
    {id:3, text:'ගෙදර වැඩ කරන්න', completed: false}
  ]); 

  return (
   <div className='App'>
    <h1>මගේ වැඩ ලැයිස්තුව (My Todo List)</h1>
    <TodoList todos={todos}/>
   </div>
  );
}

export default App;
