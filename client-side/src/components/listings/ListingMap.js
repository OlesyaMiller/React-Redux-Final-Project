import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
  } from "react-google-maps";
import React from "react"

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: parseFloat(props.latitude), lng: parseInt(props.longitude) }}
    // defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  >
    {console.log(props, 'map props')}

    { props.isMarkerShown && <Marker 
      position={{ lat: parseFloat(props.latitude), lng: parseInt(props.longitude) }}
      // position={{ lat: props.latitude, lng: props.longitude }}
    />}
  </GoogleMap>

));
  
  export default MapWithAMarker 