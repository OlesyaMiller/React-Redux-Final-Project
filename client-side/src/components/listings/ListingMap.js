import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
  } from "react-google-maps";
import React from "react"

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  console.log(props.latitude, 'latitude')
  // <GoogleMap
  //   defaultZoom={8}
  //   defaultCenter={{ lat: props.latitude, lng: props.longitude }}
  // >
  //   { props.isMarkerShown && <Marker 
  //     position={{ lat: props.latitude, lng: props.longitude }}
  //   />}
  // </GoogleMap>
));
  
  export default MapWithAMarker 