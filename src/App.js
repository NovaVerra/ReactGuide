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
		otherState: "some other value"
	}

	// switch names using setState
	switchNameHandler = (newName) => {
		// console.log('Was clicked!')
		// DO NOT DO THIS: personsState[0].name = "Maximillian"
		this.setState({
			persons: [
				{name: newName, age: 19},
				{name: "Babel", age: 27},
				{name: "Christina", age: 32}
			]
		})
	}

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{name: "Abby", age: 19},
				{name: event.target.value, age: 27},
				{name: "Christina", age: 32}
			]
		})
	}

	render () {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		}

		return (
			<div className="App">
				<h1>Hello, I am an React App</h1>
				<p>This is really working</p>
				<button 
					onClick={() => this.switchNameHandler("Zeta")}
					style={style}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, "Unicorn")}
					change={this.nameChangeHandler}>
						My Hobbies: Racing
					</Person>
				<Person
				name={this.state.persons[2].name}
				age={this.state.persons[2].age}/>
			</div>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
	}
}

export default App;
