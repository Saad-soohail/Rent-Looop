import React, { Component } from 'react';
import Activities from './activities';
import Transactions from './transactions';

class Dashboard extends Component {
  render() {
  	
    return (
    	<div className="wrapper">
    		<div className="row">
    			<div className="col-md-6 container-box">
                    <div>
    				    <Activities />
                    </div>
                    
    			</div>

    			<div className="col-md-6">
    				property
    			</div>
    		</div>
    		
    	</div>
    );
  }
}

export default Dashboard;
