import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const deleteTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		console.log(newTodos);
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
			{todos.map((todo) => (
				<div className="todos" key={todo.id}>
					<div>{todo.text}</div>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default TodoList;
