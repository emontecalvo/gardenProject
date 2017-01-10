import React from 'react';
import {connect} from 'react-redux';

class Card extends React.Component {
  render() {
    return ( <div>
    	<div className="testdiv">
	    	<p>IMAGE HERE</p>
	    	<p>Title:  Project 1</p>
	    	<p>Features: 100% flexbox blah blah blah</p>
	    	<p>click image to see!</p>
	    </div>
    </div>
    )
  }
}

module.exports = Card;
