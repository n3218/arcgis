import React, { useEffect, useRef } from "react"
import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import ScaleBar from "@arcgis/core/widgets/ScaleBar"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle"
import Search from "@arcgis/core/widgets/Search"
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion"
import Home from "@arcgis/core/widgets/Home"
import Locate from "@arcgis/core/widgets/Locate"
import Graphic from "@arcgis/core/Graphic"

import { ARCGIS_API_KEY } from "../globalVariables"

const SfiEmbeddedWidgets = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const map = new Map({
      basemap: "streets"
    })
    let mapView = new MapView({
      container: mapRef.current, // Div element Reference to the view div created in step 5
      map: map, // Reference to the map object created before the view
      zoom: 4, // Sets zoom level based on level of detail (LOD)
      center: [-86.049, 38.485] // Sets center point of view using longitude,latitude
    })

    const homeWidget = new Home({
      view: mapView
    })
    // adds the home widget to the top left corner of the MapView
    mapView.ui.add(homeWidget, { position: "top-left", index: 0 })

    // Locate widget may only appear if page is served over HTTPS
    const locateWidget = new Locate({
      view: mapView, // Attaches the Locate button to the view
      graphic: new Graphic({
        symbol: { type: "simple-marker" } // overwrites the default symbol used for the
        // graphic placed at the location of the user when found
      })
    })
    mapView.ui.add(locateWidget, "top-left")

    const searchWidget = new Search({
      view: mapView
    })
    // Adds the search widget below other elements in
    // the top left corner of the view
    mapView.ui.add(searchWidget, { position: "top-right", index: 0 })

    // 1 - Create the widget
    const basemapToggle = new BasemapToggle({
      // 2 - Set properties
      view: mapView, // view that provides access to the map's 'topo-vector' basemap
      nextBasemap: "hybrid" // allows for toggling to the 'hybrid' basemap
    })
    // Add widget to the top right corner of the view
    mapView.ui.add(basemapToggle, "top-right")

    const scaleBar = new ScaleBar({
      view: mapView
    })
    // Add widget to the bottom left corner of the view
    mapView.ui.add(scaleBar, {
      position: "bottom-left"
    })
    const ccWidget = new CoordinateConversion({
      view: mapView,
      multipleConversions: false
    })
    // Adds widget in the bottom left corner of the view
    mapView.ui.add(ccWidget, "bottom-right")

    return () => {
      if (!!mapView) {
        mapView.destroy()
        mapView = null
      }
    }
  })

  return (
    <>
      <h1>SFI Embedded Widgets Sample</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default SfiEmbeddedWidgets
