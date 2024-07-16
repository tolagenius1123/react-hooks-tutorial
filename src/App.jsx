import Counter from "./components/counter/Counter";
import Navbar from "./components/navbar/Navbar";
import UpdateUser from "./components/update-user/UpdateUser";
import User from "./components/user/User";

function App() {
	return (
		<div className="home">
			<Navbar />
			<div className="event">
				{/* <Counter /> */}
				{/* <UpdateUser /> */}
				<User />
			</div>
		</div>
	);
}

export default App;
