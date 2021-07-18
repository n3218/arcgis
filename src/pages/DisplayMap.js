import React, { useEffect, useRef } from "react"
import { loadModules } from "esri-loader"
// import Map from "@arcgis/core/Map"
// import esriConfig from "@arcgis/core/config"
// import MapView from "@arcgis/core/views/MapView"

const DisplayMap = () => {
  const MapEl = useRef(null)

  // const mapRef = useRef()
  // esriConfig.apiKey = "YOUR_KEY";

  useEffect(() => {
    let view
    loadModules(["esri/views/MapView", "esri/WebMap"], {
      css: true
    }).then(([MapView, WebMap]) => {
      const webmap = new WebMap({
        basemap: "topo-vector"
      })
      view = new MapView({
        map: webmap,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: MapEl.current // Div element
      })
    })
    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
    // const map = new Map({
    //   basemap: "arcgis-topographic" // Basemap layer service
    // });

    // const view = new MapView({
    //   map: map,
    //   center: [-118.805, 34.027], // Longitude, latitude
    //   zoom: 13, // Zoom level
    //   container: mapRef.current // Div element
    // });

    // return () => {
    //   view.container = null
    // }
  })

  return <div id="viewDiv" ref={MapEl}></div>
}

export default DisplayMap
