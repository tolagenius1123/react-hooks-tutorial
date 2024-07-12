import Counter from "./components/counter/Counter";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<div className="home">
			<Navbar />
			<div className="event">
				<Counter />
			</div>
		</div>
	);
}

export default App;
