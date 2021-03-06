import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import { ARCGIS_API_KEY } from "../globalVariables"

const DisplayMap = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    })

    let view = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 11, // Zoom level
      container: mapRef.current // Div element
    })

    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
  })

  return (
    <>
      <h1>Display Map</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default DisplayMap
