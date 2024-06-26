import { useEffect, useState } from "react";

const InputForm = () => {
	const [inputValue, setInputValue] = useState(""); // значение внутри нашего поля ввода
	const [submittedValue, setSubmittedValue] = useState(""); // работа с формами

	useEffect(() => {
		console.log("Input value changed:", inputValue); // выводит на консоль каждую введеную букву / срабатывает  эффект
	}, [inputValue]);

	const handlesubmit = (e) => {
		e.preventDefault(); // остановка отправки формы
		setSubmittedValue(inputValue);
		setInputValue("");
	};

	return (
		<div>
			<form onSubmit={handlesubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{submittedValue && <p>Submitted value: {submittedValue}</p>}
		</div>
	);
};

export default InputForm;
