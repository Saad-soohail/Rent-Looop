import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
            lat: 25.2048,
            lng: 55.2708
          }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBNFZE1wMhBPvRuXaK7kh6gSPiRRJzdTP8'
})(MapContainer)


