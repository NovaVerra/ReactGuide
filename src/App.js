import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {

	// // state of class based component
	// state = {
	// 	persons: [
	// 		{name: "Abby", age: 19},
	// 		{name: "Babel", age: 27},
	// 		{name: "Christina", age: 32}
	// 	],
	// 	otherState: "some other value"
	// }

	// state of functional based component
	const [personsState, setPersonsState] = useState({
		persons: [
			{name: "Abby", age: 19},
			{name: "Babel", age: 27},
			{name: "Christina", age: 32}
		],
		otherState: "some other value"
	})

	// // switch names using setState
	// switchNameHandler = () => {
	// 	// console.log('Was clicked!')
	// 	// DO NOT DO THIS: personsState[0].name = "Maximillian"
	// 	this.setState({
	// 		persons: [
	// 			{name: "Zeta", age: 19},
	// 			{name: "Babel", age: 27},
	// 			{name: "Christina", age: 99}
	// 		]
	// 	})
	// }

	console.log(personsState)

	// switch name using useState
	// useState does not merge the previous and next state, you have to enter all variables if you want them
	const switchNameHandler = () => {
		// console.log('Was clicked!')
		// DO NOT DO THIS: personsState[0].name = "Maximillian"
		setPersonsState({
			persons: [
				{name: "Zeta", age: 19},
				{name: "Babel", age: 27},
				{name: "Christina", age: 99}
			],
			otherState: personsState.otherState
		})
	}

	return (
		<div className="App">
			<h1>Hello, I am an React App</h1>
			<p>This is really working</p>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
			<Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
		</div>
	)
	// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;
