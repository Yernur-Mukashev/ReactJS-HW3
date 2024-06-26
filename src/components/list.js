// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

import { useState } from "react";

const TodoList = () => {
    // Сосотояние для хранения списка дел
	const [todos, setTodos] = useState([]);
    // Состояние для хранения текущего ввода в тесктовос поле
	const [currentTodo, setCurrentTodo] = useState("");

    // Обработчик добавления нового дела в список
	const addTodo = (e) => {
		e.preventDefault(); // Предотвращаем перезагрузку формы
		if (!currentTodo.trim()) return; // Игнорируем пустые строки
		setTodos([...todos, currentTodo]); // Добавляем текущее дело в список
		setCurrentTodo(""); // Очищаем текстовое поле
	};
    
    // Обработчик изменения текстового поля
	const handleInputChange = (e) => {
		setCurrentTodo(e.target.value);
	};

	return (
		<>
			<form onSubmit={addTodo}>
				<input type="text" value={currentTodo} onChange={handleInputChange} />
				<button type="submit">Добавить</button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li> // Используем индекс как ключ, что подходит для данного примера
				))}
			</ul>
		</>
	);
};

export default TodoList;
