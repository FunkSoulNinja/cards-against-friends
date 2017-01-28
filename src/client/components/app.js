import React, { Component } from 'react';
import "./app.scss";

class App extends Component {
	Bclick() {
		console.log('you clicked the button');
	}
	render() {
		return (
			<div>
				<p>Hello there!!</p>
				<button onClick={this.Bclick.bind(this)}>I am a button</button>
			</div>
		);
	}
}
export default App;
