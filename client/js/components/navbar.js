import React from 'react';
import {connect} from 'react-redux';

class Navbar extends React.Component {
  render() {
    return ( <div>
      <div className="navigation">
        <ul>
          <li>home &nbsp; </li>
          <li>about &nbsp;</li>
          <li>login &nbsp;</li>
        </ul>
      </div>
    </div>
    )
  }
}

module.exports = Navbar;