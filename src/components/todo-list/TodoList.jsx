import { useState } from "react";
import "./TodoList.css";


  const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editingTodoId, setEditingTodoId] = useState(null); 
    const [editText, setEditText] = useState(""); 

    const deleteTodo = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    };

    const handleAddTodo = (event) => {
      event.preventDefault();
      const newTodo = {
        id: Math.random(),
        text: todo,
      };

      if (todo.trim() !== "") {
        setTodos([...todos, newTodo]);
        setTodo("");
      }
    };

    const handleEditTodo = (id, currentText) => {
      setEditingTodoId(id);
      setEditText(currentText);
    };

    const handleSaveEdit = (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      );
      setTodos(updatedTodos);
      setEditingTodoId(null);
      setEditText("");
    };

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
        {todos.map((todo) => (
          <div className="todos" key={todo.id}>
            {editingTodoId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
              </div>
            ) : (
              <div>
                <div>{todo.text}</div>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  export default TodoList;
