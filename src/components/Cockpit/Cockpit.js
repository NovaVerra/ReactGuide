import React from 'react'
import styles from './Cockpit.module.css'

const cockpit = (props) => {
	const classes = []
	let btnStyle = ''

	if (props.showPersons) {
		btnStyle = styles.Red
	}
	if (props.persons.length <= 2) {
		classes.push(styles.red) // classes = ["red"]
	}
	if (props.persons.length <= 1) {
		classes.push(styles.bold) // classes = ["red", "bold"]
	}

	return (
		<div className={styles.Cockpit}>
			<h1>Hello, I am an React App</h1>
			<p className={classes.join(' ')}>This is really working</p>
			<button
				className={btnStyle} 
				onClick={props.click}>Toggle Persons</button>
		</div>
	)
}

export default cockpit
