import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Navbar from './navbar';

class Home extends React.Component {
	render() {
		return <div>
			<Navbar />
			<h1>the garden project</h1>
			<div className="card_list">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

		</div>;
	}
}

module.exports = Home;
