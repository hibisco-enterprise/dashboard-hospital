import React from "react";
import mapboxgl from '!mapbox-gl';

function Map() {
    mapboxgl.accessToken = 'pkeyJ1IjoiaGliaXNjb2VudGVycHJpc2UiLCJhIjoiY2wyNTd1Nmd0MTVoODNjcDc5OXBmODYxMCJ9.PQo8LI7tQYbPRTdWbCJXSw'

    return (
        <>
        <div ref={mapContainer} className="map-container" />
        </>
    );
}

export default Map;