import React, { Component } from 'react'
import styles from './App.module.css'
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {

	// STATE OF CLASS BASED COMPONENT
	state = {
		persons: [
			{id: "0", name: "Abby", age: 19},
			{id: "1", name: "Babel", age: 27},
			{id: "2", name: "Christina", age: 32}
		],
		otherState: "some other value",
		showPersons: false
	}

	// CHANGE NAME THROUGH TEXTBOX
	nameChangeHandler = (event, id) => {
		// Return true if index is found
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id
		})
		// Copy the element in the array
		const person = {...this.state.persons[personIndex]}
		// Set textbox as name
		person.name = event.target.value

		// const person = Object.assign({}, this.state.persons[personIndex])

		// Copy entire array
		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({persons: persons})
	}

	// REMOVE PEROSN BY CLICKING ON IT
	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1)
		this.setState({persons: persons})
	}

	// HIDE OR SHOW LIST
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons
		this.setState({showPersons: !doesShow})
	}

	render () {
		// CONDITIONAL RENDERING
		let persons = null
		let btnStyle = ''

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <ErrorBoundary key={person.id}>
								<Person 
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler.bind(this, index)}
								change={(event) => this.nameChangeHandler(event, person.id)}/>
							</ErrorBoundary>
					})}
				</div>
			)
			btnStyle = styles.Red
		}

		const classes = []
		if (this.state.persons.length <= 2) {
			classes.push(styles.red) // classes = ["red"]
		}
		if (this.state.persons.length <= 1) {
			classes.push(styles.bold) // classes = ["red", "bold"]
		}

		return (
			<div className={styles.App}>
				<h1>Hello, I am an React App</h1>
				<p className={classes.join(' ')}>This is really working</p>
				<button
					className={btnStyle} 
					onClick={this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
	}
}

export default App
