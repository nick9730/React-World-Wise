
import { useNavigate } from 'react-router-dom'
import styles from './Map.module.css'
import { useMap,MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { useEffect, useState } from 'react';
import {useCities} from "../contexts/CitiesContexts"
import {useGeolocation} from "../hooks/useGeolocate"
import Button from './Button'
import {useUrlPosition} from "../hooks/useUrlPosition"

function Map(){

    const [mapPosition,setMapPosition]= useState([40,0]);
    const {cities} = useCities();
    const {isLoading:isLoadingPosition,position:geoLocationPosition,getPosition}= useGeolocation();
     const [mapLat,mapLng] = useUrlPosition();
    
    


    useEffect(
        function(){

        if(mapLat && mapLng)  setMapPosition([mapLat,mapLng])
        },
        [mapLat,mapLng]
    );
     
      useEffect(
        function(){
        if(geoLocationPosition) setMapPosition([geoLocationPosition.lat,geoLocationPosition.lng])
        },[geoLocationPosition]
      )

      
    return(
        <div className={styles.mapContainer}>
        {!geoLocationPosition &&  <Button type="position" onClick={getPosition}>
            {isLoadingPosition ? "Loading..." : "Use your Geolation"}
          </Button>}
         

            <MapContainer 
            center={mapPosition} 
            zoom={6} 
            scrollWheelZoom={true} 
            className={styles.map}
            >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
{cities.map((city)=>(
    <Marker position={[city.position.lat,city.position.lng]} key={city.id}>
        <Popup key={city.id}>
 <span>
 {city.cityName}
    </span>
 </Popup>
    </Marker>
))}


    <ChangeCenter position={mapPosition}/>
    <DetectCLick />
  </MapContainer>
          
        </div>
    )
}

function ChangeCenter({position}){
    const map=useMap()
    map.setView(position);
    return null;
}

function DetectCLick(){
    const navigate=  useNavigate()
    useMapEvents({
        click:(e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    })
}

export default Map