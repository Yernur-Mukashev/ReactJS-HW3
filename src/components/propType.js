import React from "react";
import PropTypes from "prop-types";

const Student = ({ name, age, isStudent }) => {
	return (
		<div>
			<h1>{name}</h1>
			<p>Возраст: {age}</p>
			<p>{isStudent ? "Студент" : "Не студент"}</p>
		</div>
	);
};

Student.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	isStudent: PropTypes.bool,
};

export default Student;
