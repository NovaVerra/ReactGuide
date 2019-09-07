import React, { Component } from 'react'
import styles from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

class App extends Component {

	constructor(props) {
		super(props)
		console.log("[App.js] constructor")
	}

	static getDerivedStateFromProps(props, state) {
		console.log("[App.js] getDerivedStateFromProps", props)
		return state
	}

	// componentWillUpdate = () => {
	// 	console.log("[App.js] componentWillUpdate")
	// }

	componentDidMount = () => {
		console.log("[App.js] componentDidMount")
	}
	
	shouldComponentUpdate = (nextProps, nextState) => {
		console.log("[App.js] shouldComponentUpdate")
		return true
	}

	componentDidUpdate = () => {
		console.log("[App.js] componentDidUpdate")
	}

	// STATE OF CLASS BASED COMPONENT
	state = {
		persons: [
			{id: "0", name: "Abby", age: 19},
			{id: "1", name: "Babel", age: 27},
			{id: "2", name: "Christina", age: 32}
		],
		otherState: "some other value",
		showPersons: false,
		showCockpit: true
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
		console.log("[App.js] render")
		// CONDITIONAL RENDERING
		let persons = null

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangeHandler}/>
				</div>
			)
		}

		return (
			<Aux>
				<button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
				{this.state.showCockpit ? <Cockpit
					title={this.props.appTitle}
					personsLength={this.state.persons.length}
					showPersons={this.state.showPersons}
					click={this.togglePersonsHandler}/> : null}
				{persons}
			</Aux>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
	}
}

export default withClass(App, styles.App)
