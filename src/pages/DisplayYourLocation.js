import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import Locate from "@arcgis/core/widgets/Locate"
import { ARCGIS_API_KEY } from "../globalVariables"

const DisplayYourLocation = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    })
    let view = new MapView({
      container: mapRef.current, // Div element
      map: map,
      center: [-40, 28],
      zoom: 2
    })
    const locate = new Locate({
      view: view,
      useHeadingEnabled: false,
      goToOverride: function (view, options) {
        options.target.scale = 1500
        return view.goTo(options.target)
      }
    })
    view.ui.add(locate, "top-left")
    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
  })
  return (
    <>
      <h1>Display Your Location</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default DisplayYourLocation
