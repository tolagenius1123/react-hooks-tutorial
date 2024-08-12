import "./TodoList.css";

const TodoList = () => {
	return (
		<div>
			<h2>What are you working on Today?</h2>
			<div className="todo-page">
				<input
					type="email"
					name="email"
					id="email"
					placeholder="type your todos here..."
				/>
				<button>Add</button>
			</div>
			<div className="todos">Wash plate</div>
			<div className="todos">Wash plate</div>
			<div className="todos">Wash plate</div>
			<div className="todos">Wash plate</div>
		</div>
	);
};

export default TodoList;
