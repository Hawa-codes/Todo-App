
const PersonForm = ({ addTodo, newTodos, setNewTodos }) => {
  return (
    <div>
      <form className='input' onSubmit={(e) => {
        e.preventDefault();
        if (newTodos.trim() !== "") {
          addTodo();
        }
      }}>
            <input type="text" placeholder='New task' value={newTodos} 
            onChange={(e) => setNewTodos(e.target.value)} />
            <button type='submit'>Add</button>
          </form> 
    </div>
  )
}

export default PersonForm
