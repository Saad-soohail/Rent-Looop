import React, { Component } from 'react';

function Avatar(){
    return(
        <div className="avatar col-sm-2">
            <span className="glyphicon glyphicon-one-fine-dot"></span>
            <img src={require('../../../images/avatar.jpeg')} />
            <span className="vertical-seperator"></span>
        </div>
    );
}
function ActivityItems(props){
        return(
        <div className="col-sm-7 no-padding">

            <h6 className="activity-title"> {props.title} </h6>
            <p className="activity-detail">{props.time} • {props.location}</p>
        </div>
        )

}
function ActionPanel(){
    return(
        <div className="col-sm-3 no-padding">
            <button className="btn btn-small">Accept</button>
            <button className="btn-decline">Decline</button>
        </div>
    );
}

class Activities extends Component {
  render() { 	

    let activities =[   {id:"1",title:"Marcy May made an offer 4000 AED for #433",time:"10 min ago",location:"34 Dubai Avenue 5544",img:"avatar.png"},
                        {id:"2",title:"Mark Rosberg sent you a private message",time:"3h ago",location:"lahore",img:"avatar.png"},
                        {id:"3",title:"cmxgfml",time:"10 min ago",location:"lahore",img:"avatar.png"}
                    ];
                    
    return (
        <section>
            <div className="row">
            	<div className="col-xs-12 small-header">
                    <h5>Activities <span className="pull-right">See all Activities</span></h5>
                </div>
            </div>
            <div className="row">
                <ul className="col-xs-12 list-unstyled">
                    {activities.map(function(activity,id){
                        return(
                            <li key={id} className="row">
                                <Avatar img={activity.img}/>

                                <ActivityItems {...activity} />
                                <ActionPanel />

                            </li>
                        )
                    },this)}
                </ul>
            </div>
        </section>
    );
  }
}

Activities.defaultProps = {};

export default Activities;
