import React, {useState} from 'react'
import ReactMapGl, {Marker} from 'react-map-gl';


function Mapa() {

    const [viewport,setViewport]=useState({
        latitude:-5.0823386,
        longitude:-42.8485111,
        zoom:17
    });


    return (
      <ReactMapGl {...viewport} width='100%' height='250px' onViewportChange={setViewport} mapboxApiAccessToken='pk.eyJ1IjoiZWxsc29ubWVuZGVzeXQiLCJhIjoiY2tvejFnNWlkMDRvNDJ1bzRqbW9sNHJocyJ9.WKBvJ-gC8teflVL0KHIZTw'>
      <Marker latitude={-5.0823386} longitude={-42.8485111} offsetLeft={-20} offsetTop={-10}>Casa</Marker>

      </ReactMapGl>
    )
}

export default Mapa

