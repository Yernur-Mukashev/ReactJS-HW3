import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const TemperatureConverter = () => {
	const [celsius, setCelsius] = useState("");
	const [fahrenheit, setFahrenheit] = useState("");

	const handleCelsiusChange = (e) => {
		const value = e.target.value;
		setCelsius(value);
		if (value === "") {
			setFahrenheit("");
		} else {
			setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
		}
	};

	const handleFahrenheitChange = (e) => {
		const value = e.target.value;
		setFahrenheit(value);
		if (value === "") {
			setCelsius("");
		} else {
			setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
		}
	};

	return (
		<Box sx={{ maxWidth: 300, margin: "0 auto", padding: 2 }}>
			<TextField
				label="Цельсия"
				variant="outlined"
				fullWidth
				margin="normal"
				value={celsius}
				onChange={handleCelsiusChange}
			/>
			<TextField
				label="Фаренгейта"
				variant="outlined"
				fullWidth
				margin="normal"
				value={fahrenheit}
				onChange={handleFahrenheitChange}
			/>
		</Box>
	);
};

export default TemperatureConverter;
