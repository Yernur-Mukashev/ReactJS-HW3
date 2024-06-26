import { useState } from "react";
import Button from "@mui/material/Button";

function ParentCounter() {
	const [count, setCount] = useState(0);
	console.log("Parent");

	const upCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h2>Родитель</h2>
			<ChilsCount count={count} />
			<Button onClick={upCount} variant="contained">
				Плюсь один
			</Button>
		</div>
	);
}

function ChilsCount({ count }) {
	console.log("click");
	return (
		<div>
			<p>Счетчик внутри</p>
			<p>Значение счетчика {count}</p>
		</div>
	);
}

export default ParentCounter;
