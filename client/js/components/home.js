import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Navbar from './navbar';
import Zen1 from './zen1';


class Home extends React.Component {
	testfunc() {
		console.log("here");
	}

	render() {
		return <div>
			<Navbar />
			<h1>the garden project</h1>
			<button onClick={this.testfunc}>change html</button>
			<div className="card_list">
				<Card />
				<Card />
				<Card />
				<Card />
				<Zen1 />
			</div>

		</div>;
	}
}

module.exports = Home;
