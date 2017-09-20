import React, { Component } from 'react';
/*import logo from '../../logo.eps';*/

class Header extends Component {
  render() {
    return (
      <header className="header">
      	<div className="col-md-1 logo-div">
      		<div className="color-shadow"><div className="logo"></div></div>
      	</div>
      	<div className="searchbar col-md-8">
      		<i className="glyphicon glyphicon-search"></i>
      		<input type="text" placeholder="Search for..."/>
      	</div>
      	<div className="col-md-3 text-right">
      		<a className="stroke" href="#">
      			<img src={require('../../images/stroke-1544.svg')} />
      			<span className="glyphicon glyphicon-one-fine-dot"></span>
      		</a>
      		<a className="shape" href="#">
      			<img src={require('../../images/shape.svg')} />
      		</a>
      		<a className="avatar" href="#">
      			<img src={require('../../images/avatar.jpeg')} />
      			<i className="glyphicon glyphicon-chevron-down"></i>
      		</a>
      	</div>
      </header>
    );
  }
}

export default Header;
