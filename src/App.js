import "./App.css";

import Nav from "./components/menu";
import HoverRating from "./components/rating";
import TemperatureConverter from "./components/temperatureConverter";
import TodoList from "./components/todoList";

function App() {
	const name = "Yernur";
	return (
		<div className="App">
			<Nav />
			<HoverRating />
			<TemperatureConverter />
			<TodoList />
		</div>
	);
}

export default App;
