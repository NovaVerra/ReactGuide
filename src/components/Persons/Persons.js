import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
	// static getDerivedStateFromProps = (props, state) => {
	// 	console.log("[Persons.js] getDerivedStateFromProps")
	// 	return state
	// }

	// componentWillReceiveProps = (props) => {
	// 	console.log("[Persons.js] componentWillReceiveProps")
	// }

	// componentWillUpdate = () => {}

	// shouldComponentUpdate = (nextProps, nextState) => {
	// 	console.log("[Persons.js] shouldComponentUpdate")
	// 	if (nextProps.persons !== this.props.persons ||
	// 		nextProps.clicked !== this.props.clicked ||
	// 		nextProps.changed !== this.props.changed) {
	// 		return true
	// 	} else {
	// 		return false
	// 	}
	// }

	getSnapshotBeforeUpdate = (prevProps, prevState) => {
		console.log("[Persons.js] getSnapshotBeforeUpdate")
		return {message: "Snapshot!"}
	}
	
	componentDidUpdate = (prevProps, prevState, snapshot) => {
		console.log("[Persons.js] componentDidUpdate")
		console.log(snapshot)
	}
	
	componentWillUnmount = () => {
		console.log("[Persons.js] componentWillUnmount")
	}

	render () {
		console.log("[Persons.js] rendering...")
		return this.props.persons.map((person, index) => {
			return (<Person 
				key={person.id}
				name={person.name}
				age={person.age}
				click={this.props.clicked.bind(this, index)}
				change={(event) => this.props.changed(event, person.id)}/>)
		})
	}
}

export default Persons
