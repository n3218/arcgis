import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import { ARCGIS_API_KEY } from "../globalVariables"

const AddFeature = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    })
    let view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: mapRef.current // Div element
    })

    //Trailheads feature layer (points)
    const trailheadsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
    })
    map.add(trailheadsLayer)

    //Trails feature layer (lines)
    const trailsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0"
    })
    map.add(trailsLayer, 0)

    // Parks and open spaces (polygons)
    const parksLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0"
    })
    map.add(parksLayer, 0)

    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
  })

  return (
    <>
      <h1>Add a feature layer</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default AddFeature
