import './App.css'
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodos(tasks.push(newTodos));
    setNewTodos("");
  };

  return (
    <>
      <section className='container'>
        <div className='heading'>
          <h1 className='title'>My To-Do List</h1>
          <form className='input' onSubmit={handleSubmit}>
            <input type="text" placeholder='New task' value={newTodos} 
            onChange={(e) => setNewTodos(e.target.value)} />
            <button type='submit'>Add</button>
          </form>  
        </div> 
        <div className='task'>
          {tasks.map((task) => (
          <div className='list'>
            <span>{task}</span>
            <button>delete</button>
          </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
