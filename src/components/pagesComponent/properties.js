import React, { Component } from 'react';

//import Header from './components/ButtonsComponent/addPropetyButton';
import ListBox from '../listboxComponent/listbox';

class Properties extends Component {
  render() {
  	var propertiesList = [{id: 1, title: 'Amaranta at Villanova', date: '31.09.2017', price:'243', landlord:'Saad'},
  							{id: 2, title: 'Amaranta at Villanova', date: '31.09.2017', price:'243', landlord:'Saad'}]
    return (
    	<div className="wrapper">
    		<h2>Properties</h2>
    		<ul className="list-inline">
	      	{propertiesList.map(property=>
	      		<ListBox key={property.id} property={property}/>
      		)}
	      	</ul>
    	</div>
    );
  }
}

export default Properties;
