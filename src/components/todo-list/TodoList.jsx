import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const deleteTodo = () => {

  }

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div>
      <h2>What are you working on Today?</h2>
      <div className="todo-page">
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          placeholder="type your todos here..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAddTodo} type="submit">
          Add
        </button>
      </div>
      {todos.map((todo, index) => (
        <div className="todos" key={index}>
          <div>{todo}</div>
		  <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
