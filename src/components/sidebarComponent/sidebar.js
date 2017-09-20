import React, { Component } from 'react';

class Sidebar extends Component {

	constructor(props) {
        super(props);

        this.state = {
            currentView: 'dashboard'
        };

        this.showDashboard = this.showDashboard.bind(this);
        this.showProperties = this.showProperties.bind(this);
        this.showLandlords = this.showLandlords.bind(this);
        this.showTenants = this.showTenants.bind(this);
        this.showTransactions = this.showTransactions.bind(this);
        this.showMaintenance = this.showMaintenance.bind(this);

    }

    showDashboard() {
        this.setState({
            currentView: 'dashboard'
        });
    }

    showProperties() {
        this.setState({
            currentView: 'properties'
        });
    }

    showLandlords() {
        this.setState({
            currentView: 'landlords'
        });
    }

    showTenants() {
        this.setState({
            currentView: 'tenants'
        });
    }

    showTransactions() {
        this.setState({
            currentView: 'transactions'
        });
    }

    showMaintenance() {
        this.setState({
            currentView: 'maintenance'
        });
    }

  render() {
    var views= ['Dashboard','Properties','Landlords','Tenants','Transactions','Maintenance'];
    return (
      <div className="left-navigation sidebar">
      	
      	<ul className="list-unstyled">
      		<li className={this.state.currentView === 'dashboard' ? 'active' : ''} onClick={this.showDashboard}>
      			<a href="#">
	      			<img src={require('../../images/dashboard.svg')}/>
	      			<p>Dashboard</p>
      			</a>
      		</li>
      		<li className={this.state.currentView === 'properties' ? 'properties active' : 'properties'} onClick={this.showProperties}>
      			<a href="#">
	      			<img src={require('../../images/properties.svg')}/>
	      			<p>Properties</p>
      			</a>
      		</li>
      		<li className={this.state.currentView === 'landlords' ? 'landlords active' : 'landlords'} onClick={this.showLandlords}>
      			<a href="#">
	      			<img src={require('../../images/landlord.svg')}/>
	      			<p>Landlords</p>
      			</a>
      		</li>
      		<li className={this.state.currentView === 'tenants' ? 'tenants active' : 'tenants'} onClick={this.showTenants}>
      			<a href="#">
	      			<img src={require('../../images/tenants.svg')}/>
	      			<p>Tenants</p>
      			</a>
      		</li>
      		<li className={this.state.currentView === 'transactions' ? 'transactions active' : 'transactions'} onClick={this.showTransactions}>
      			<a href="#">
	      			<img src={require('../../images/transactions.svg')}/>
	      			<p>Tansactions</p>
      			</a>
      		</li>
      		<li className={this.state.currentView === 'maintenance' ? 'maintenance active' : 'maintenance'} onClick={this.showMaintenance}>
      			<a href="#">
	      			<img src={require('../../images/maintenance.svg')}/>
	      			<p>Maintenance</p>
      			</a>
      		</li>

      	</ul>
      </div>
    );
  }
}

export default Sidebar;
