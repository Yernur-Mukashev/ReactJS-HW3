// Создать компонент Counter, который отображает кнопку и
// число.
// ● Число увеличивается на 1 каждый раз, когда пользователь
// нажимает на кнопку.

import { useState } from "react";
import Button from "@mui/material/Button";

function Counter() {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount(count + 1);
	};

	const downDateCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	return (
		<div>
			<Button onClick={updateCount} color="success">
				+
			</Button>
			<snip>{count}</snip>
			<Button onClick={downDateCount} color="secondary">
				-
			</Button>
		</div>
	);
}

export default Counter;
