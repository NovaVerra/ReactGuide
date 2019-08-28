import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	// state of class based component
	state = {
		persons: [
			{name: "Abby", age: 19},
			{name: "Babel", age: 27},
			{name: "Christina", age: 32}
		],
		otherState: "some other value",
		showPersons: false
	}

	// change name through text input on GUI
	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{name: "Abby", age: 19},
				{name: event.target.value, age: 27},
				{name: "Christina", age: 32}
			]
		})
	}

	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons
		persons.splice(personIndex, 1)
		this.setState({persons: persons})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons
		this.setState({showPersons: !doesShow})
	}

	render () {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		let persons = null

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, personIndex) => {
						return <Person 
							name={person.name}
							age={person.age}
							click={this.deletePersonHandler.bind(this, personIndex)}/>
					})}
				</div>
			)
		}

		return (
			<div className="App">
				<h1>Hello, I am an React App</h1>
				<p>This is really working</p>
				<button 
					onClick={this.togglePersonsHandler}
					style={style}>Toggle Persons</button>
				{persons}
			</div>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
	}
}

export default App;
