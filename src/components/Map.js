import GoogleMapReact from 'google-map-react';
import LocationMarker from "./LocationMarker";

const Map = ({center, zoom}) => {
    return ( 
        <div className="map">
            {/*embed the GoogleMapReact */}
            <GoogleMapReact
            bootstrapURLKeys={
                {key:
                    'AIzaSyAAHd8QrrI_nE3oBQsRFoFPFOsqQBgGGyo' }}
                    defaultCenter={center}
                    defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />

            </GoogleMapReact>

        </div>
    )
}
// set default props
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map