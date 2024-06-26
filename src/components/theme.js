import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

// Компонент Content, который изменяет свой стиль в зависимости от темы
const Content = ({ theme }) => {
	const contentStyle = {
		backgroundColor: theme === "light" ? "#fff" : "#333",
		color: theme === "light" ? "#000" : "#fff",
	};
	return (
		<div style={contentStyle}>
			<span>{theme === "light" ? "Light Theme" : "Dark Theme"}</span>
		</div>
	);
};

// Компонент ThemeSwitcher, который управляет состоянием темы и передает его в Content
const ThemeSwitcher = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div>
			<Switch onClick={toggleTheme} {...label} defaultChecked />
			<Content theme={theme} />
		</div>
	);
};

export default ThemeSwitcher;
