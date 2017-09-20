import React, { Component } from 'react';

class ListBox extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
	    return (
	      	<li className="col-md-4">
	      		<img src={'http://placehold.it/250x150&text=slide1'} alt="img" className="img-responsive"/>
	      		<h5>{this.props.property.title}</h5>
	      		<p>{this.props.property.date}</p>
	      		<p><span className="price">{this.props.property.price}</span></p>
	      	</li>
	    );
  	}
}	
export default ListBox;
