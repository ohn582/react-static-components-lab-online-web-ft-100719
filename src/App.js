import React, { Component } from 'react';
import CatComponent from './CatComponent';
<<<<<<< HEAD

import MouseComponent from './MouseComponent'
import EinsteinQuoteComponent from './EinsteinQuoteComponent'
=======
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent'
import EinsteinQuoteComponent from './EinsteinQuoteComponent';
>>>>>>> dd61fdfe781e356338eaa4be1ba47612388a9af7

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
<<<<<<< HEAD
				<EinsteinQuoteComponent />
				<MouseComponent />
=======
				<GraceHopperQuoteComponent />
				<MouseComponent />
				<EinsteinQuoteComponent />
>>>>>>> dd61fdfe781e356338eaa4be1ba47612388a9af7
			</div>
		);
	}
}

export default App;
