import React from "react";
import mapboxgl from "mapbox-gl";
import ReactMapGL, {
  AttributionControl,
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
  useControl,
} from "react-map-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;
export default function LocationMap({
  Latitude,
  setLatitude,
  Longitude,
  setLongitude,
  Zoom,
  updatePlaceName,
  Mrk,
  setZoom,PINS,POP
}) {
  console.log(Longitude, Latitude, Zoom);
  const Geocoder = () => {
    const ctrl = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: false,
      collapsed: true,
    });
    useControl(() => ctrl);
    ctrl.on("result", (e) => {
      const coords = e.result.geometry.coordinates;
      console.log(coords);
      setLongitude(coords[0]);
      setLatitude(coords[1]);
    });
    return null;
  };

  const getPlaceName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      const placeName = data.features[0].place_name;
      console.log("Place Name:", placeName);
      updatePlaceName(placeName);
    } catch (error) {
      console.error("Error retrieving place name:", error);
    }
  };

  // Handle changes in the map's viewport and call the callback function
  const handleViewportChange = (newViewport) => {
    let val = newViewport.viewState;
    console.log(val);

    let lat = newViewport.viewState.latitude.toFixed(4)
    let lon = newViewport.viewState.longitude.toFixed(4)
    console.log(lat,lon);
    console.log(typeof lat);
    console.log(typeof lon);
    setLongitude(newViewport.viewState.longitude.toFixed(4));
    setLatitude(newViewport.viewState.latitude.toFixed(4));
    setZoom(newViewport.viewState.zoom.toFixed(2));
  };

  return (
    <ReactMapGL
      mapboxApiAccessToken={mapboxgl.accessToken}
      width="100%"
      height="100%"
      latitude={Latitude}
      longitude={Longitude}
      attributionControl
      customAttribution={`${"\u00A9"} LIBRARY HUB`}
      zoom={Zoom}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onMove={handleViewportChange}
    >
      {
        Mrk
        //  <Marker
        //     latitude={Latitude}
        //     longitude={Longitude}
        //     draggable
        //     onDragEnd={(e) => {
        //       console.log(e.lngLat.lat);
        //       console.log(e.lngLat.lng);
        //       setLatitude(e.lngLat.lat);
        //       setLongitude(e.lngLat.lng);
        //       getPlaceName(e.lngLat.lat, e.lngLat.lng);
        //     }}
        //   />
      }
      <FullscreenControl position="top-left" />
      <GeolocateControl
        position="top-left"
        trackUserLocation
        onGeolocate={(e) => {
          setLatitude(e.coords.latitude);
          setLongitude(e.coords.longitude);
          getPlaceName(e.coords.latitude, e.coords.longitude);
        }}
      />
      <NavigationControl position="top-left" />
      <ScaleControl position="bottom-right" />
      <Geocoder />
      {PINS}
      {POP}
      {/* <AttributionControl customAttribution="Map design by me" /> */}
    </ReactMapGL>
  );
}
