import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	// state of class based component
	state = {
		persons: [
			{id: "0", name: "Abby", age: 19},
			{id: "1", name: "Babel", age: 27},
			{id: "2", name: "Christina", age: 32}
		],
		otherState: "some other value",
		showPersons: false
	}

	// change name through text input on GUI
	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id
		})

		const person = {...this.state.persons[personIndex]}

		person.name = event.target.value

		// const person = Object.assign({}, this.state.persons[personIndex])

		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({persons: persons})
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons]
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
					{this.state.persons.map((person, index) => {
						return <Person 
							key={person.id}
							name={person.name}
							age={person.age}
							click={this.deletePersonHandler.bind(this, index)}
							change={(event) => this.nameChangeHandler(event, person.id)}/>
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
