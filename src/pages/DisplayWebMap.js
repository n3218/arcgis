import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import WebMap from "@arcgis/core/WebMap"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import ScaleBar from "@arcgis/core/widgets/ScaleBar"
import Legend from "@arcgis/core/widgets/Legend"
import { ARCGIS_API_KEY } from "../globalVariables"

const DisplayWebMap = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const webmap = new WebMap({
      portalItem: {
        id: "41281c51f9de45edaf1c8ed44bb10e30"
      }
    })
    let view = new MapView({
      map: webmap,
      container: mapRef.current // Div element
    })
    const scalebar = new ScaleBar({
      view: view
    })
    view.ui.add(scalebar, "bottom-left")
    const legend = new Legend({
      view: view
    })
    view.ui.add(legend, "top-right")

    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
  })

  return (
    <>
      <h1>Display a Web Map</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default DisplayWebMap
