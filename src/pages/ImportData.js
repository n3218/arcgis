import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import { ARCGIS_API_KEY } from "../globalVariables"

const ImportData = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const map = new Map({
      basemap: "arcgis-navigation"
    })
    let mapView = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 12, // Zoom level
      container: mapRef.current // Div element
    })

    //Trails feature layer (lines)
    const trailsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/rVaRpzRscHx9PnNL/arcgis/rest/services/trails/FeatureServer"
    })
    map.add(trailsLayer, 0)

    return () => {
      if (!!mapView) {
        mapView.destroy()
        mapView = null
      }
    }
  })
  return (
    <>
      <h1>Import data as a feature layer</h1>
      <p>Data shown from ArcGIS Online hosted layer.</p>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default ImportData
