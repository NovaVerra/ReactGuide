import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	// STATE OF CLASS
	state = {
		persons: [
			{name: "Abby", age: 19},
			{name: "Babel", age: 27},
			{name: "Christina", age: 32}
		]
	}

	// SWITCH NAMES
	switchNameHandler = () => {
		console.log('Was clicked!')
	}

	render () {
		return (
			<div className="App">
				<h1>Hello, I am an React App</h1>
				<p>This is really working</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
			</div>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
	}
}

export default App;
