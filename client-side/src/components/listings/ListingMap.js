import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '60%'
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {}          
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { latitude, longitude, listing: {location}, google} = this.props 

    return (
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
          }
        }>
        <Marker
          onClick={this.onMarkerClick}
          name={location.name}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB0VCsMXeDbV5z7vmvm1SuHrCPPZx67E30'
})(MapContainer);