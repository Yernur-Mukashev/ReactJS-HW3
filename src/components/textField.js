import { useState } from "react";
import TextField from "@mui/material/TextField";

function TextDisplayForm() {
	const [text, setText] = useState("");
	const [displayText, setDisplayText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleClick = () => {
		setDisplayText(text);
	};
	return (
		<div>
			<TextField
				label="Введите текст"
				fullWidth
				value={text}
				onChange={handleChange}
				variant="outlined"
				margin="normal"
			/>
			<button
				variant="contained"
				color="primary"
				fullWidth
				onClick={handleClick}
			>
				Отобразить текст
			</button>
			{displayText && (
				<p style={{ marginTop: "20px", fontSize: "18px" }}>{displayText}</p>
			)}
		</div>
	);
}

export default TextDisplayForm;
