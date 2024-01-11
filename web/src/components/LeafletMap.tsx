import {useState} from "react";
import {MapContainer, useMap, TileLayer, Marker,Popup,useMapEvents} from "react-leaflet";
import {FeatureLayer} from "react-esri-leaflet";
import {LayerProps} from "@/models/LeafletMap.ts";

import "leaflet/dist/leaflet.css";



const baseMaps = [{
  "name": "Dark Gray Base",
  "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
},
  {
    "name": "Light Gray Base",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Hillshade",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Ocean Base",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "DeLorme World Base Map",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Street Map",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Navigation Charts",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/Specialty/World_Navigation_Charts/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "National Geographic",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Imagery",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Physical Map",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Shaded Relief",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Terrain",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}"
  },
  {
    "name": "World Topo Map",
    "endpoint": "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
  }]
const LeafletMap = (props: { layers: LayerProps[] }) => <MapContainer zoom={12} id="map" center={[33.847, -84.370]}>
  <TileLayer url={baseMaps[0].endpoint}/>
  {props.layers.map((layer, i) => <FeatureLayer key={i} url={layer.url} where={layer?.definitionExpression ?? ``}/>)}

</MapContainer>

export default LeafletMap;