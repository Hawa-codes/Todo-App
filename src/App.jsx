import './App.css'
import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Todo from './components/Todo';
import todoService from "./services/todos";

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  useEffect(() => {
    todoService.getAll()
      .then((todos) => {
        setTodos(todos);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  const addTodo = () => {

    const todoObject = {
      text: newTodos,
    };

    todoService.create(todoObject)
      .then(response => {
        setTodos(todos.concat(response));
        setNewTodos("");
      })
      .catch(error => {
        console.error("Error adding todo:", error);
      });

  }

  const deleteTodo = (index) => { 
    todoService.remove(index)
      .then(() => {
        setTodos(todos.filter((_, i) => i !== index));
      })
      .catch(error => {
        console.error("Error deleting todo:", error);
      });
  }

  return (
    <>
      <section className='container'>
        <div className='heading'>
          <h1 className='title'>My To-Do List</h1>
           <PersonForm addTodo={addTodo} newTodos={newTodos} setNewTodos={setNewTodos} />
        </div> 
        <Todo todos={todos} deleteTodos={deleteTodo} />
      </section>
    </>
  )
}

export default App
