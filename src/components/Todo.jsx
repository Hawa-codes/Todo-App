
const Todo = ({ todos, deleteTodos }) => {
  return (
    <div className='task'>
          {todos.map((todo, index) => (
            <div className='list' key={index}>
              <span>{todo.text}</span>
              <button onClick={() => deleteTodos(index)}>delete</button>
            </div>
          ))}
        </div>
  )
}

export default Todo
