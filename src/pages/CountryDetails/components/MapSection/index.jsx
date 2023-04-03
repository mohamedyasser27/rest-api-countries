import React, { useEffect, useRef } from "react";
import { TileLayer, Marker, MapContainer, ZoomControl } from "react-leaflet";
import markerIcon from "./components/MarkerIcon";
import "./assets/css/leaflet.css";
import './MapSection.scss'

export default function MapSection({ lat, lng }) {
  let mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current != null) {
      mapRef.current.setView([lat, lng]);
    }
  }, [lat]); //change api when api is called

  return (
    <>
      {lat != null && (
        <MapContainer
          ref={mapRef}
          id="map"
          center={[lat, lng]}
          zoom={6.5}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker icon={markerIcon} position={[lat, lng]}></Marker>
          <ZoomControl position="bottomleft" />
        </MapContainer>
      )}
    </>
  );
}
