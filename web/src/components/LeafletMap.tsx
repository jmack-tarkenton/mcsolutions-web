import {useState, useMemo, useRef} from "react";
import L from "leaflet";
import {LatLngBounds, LatLngBoundsExpression, Map} from "leaflet";
import {MapContainer, useMap, TileLayer, Marker, Popup, useMapEvents, LayerGroup, FeatureGroup} from "react-leaflet";
import {FeatureLayer} from "react-esri-leaflet";
import {LayerProps} from "@/models/LeafletMap.ts";

import "leaflet/dist/leaflet.css";

interface MapControlProps {
  scrollWheelZoom?: boolean;
}

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

// const MyMap = () => {
//   const map = useMapEvents({
//     layeradd: (e) => {
//       console.log({layer: e, map});
//       const layer = e.target;
//
//       const layerBounds = layer.getBounds();
//       console.log({layerBounds});
//       // map.flyToBounds(layerBounds, {duration: 1.5, easeLinearity: 0.5});
//       layer.flyToBounds(layerBounds, {duration: 1.5, easeLinearity: 0.5});
//       map.fitBounds(layerBounds, {duration: 1.5, easeLinearity: 0.5});
//     },
//     load: (e) => {
//       console.log({e, map});
//     },
//     add: (e) => {
//       console.log({e, map});
//     }
//   })
//   return null;
// }
const MapHandler = (props:{map: Map}) => {
  const {map} = props;
  // const [bounds, setBounds] = useState([
  //   [35.2719, -73.4436],
  //   [33.2656, -93.8232],
  // ]);


  // const map = useMap();
  map.whenReady( () => {
    console.log({map},'loaded');

  });
  map.on({
    layeradd: (e) => {
      console.log({layer: e, map});
      const layer = e.target;

      const layerBounds = layer.getBounds();
      const center= layerBounds.getCenter();
      map.setView(center, 12);
      console.log({layerBounds});
      // map.flyToBounds(layerBounds, {duration: 1.5, easeLinearity: 0.5});
      map.flyToBounds(layerBounds, {duration: 1.5, easeLinearity: 0.5});
      map.fitBounds(layerBounds);
    },
    load: (e) => {
      console.log({e, map});
    },
    add: (e) => {
      console.log({e, map});
    },
    moveend: (e) => {
      console.log({e, bounds:map.getBounds(), center: map.getCenter()});
    }
  })


  return null;
}


const LeafletMap = (props: { layers: LayerProps[], mapControls?: MapControlProps } = {layers: [], mapControls: {}}) => {

  const [map,setMap] = useState<Map|null>(null);


  const defaultControls: MapControlProps = {
    scrollWheelZoom: true,
  };
  const controls = {...defaultControls, ...props.mapControls};
  return (<>
      {map && <MapHandler map={map} />}
    <MapContainer ref={setMap} zoom={7} id="map" center={[34.1912, -83.9904]} {...controls} >
        <TileLayer url={baseMaps[0].endpoint}/>
        <FeatureGroup >
          {props.layers.map((layer, i) => <FeatureLayer key={i} url={layer.url}
                                                        where={layer?.definitionExpression ?? ``}/>)}
        </FeatureGroup>

      </MapContainer>
    </>
  );
}

export default LeafletMap;