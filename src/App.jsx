import { useState } from "react";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  
  const addTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo('');
  }

  const deleteTodo = (index) => {
    const copyTodo = [...todoList];
    copyTodo.splice(index, 1);
    setTodoList(copyTodo);
  }
  
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /> 
      <button disabled={!todo} onClick={addTodo}>Add</button>
      <ul>
        {
          todoList.map((todos, index) => (
            <li key={index}>
              <span>{todos}</span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
