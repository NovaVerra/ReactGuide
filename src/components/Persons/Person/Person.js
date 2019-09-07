import React, { Component } from 'react'
import styles from './Person.module.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

class Person extends Component {
	render () {
		console.log("[Person.js] rendering...")
		return (
			<Aux>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.change} value={this.props.name}/>
			</Aux>
		)
	}
}

export default withClass(Person, styles.Person)
