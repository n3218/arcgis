import React, { useEffect, useRef } from "react"
import { loadModules } from "esri-loader"

const DisplayMapYT = () => {
  const MapEl = useRef(null)

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
  })

  return (
    <>
      <h1>Display Map with loadModules</h1>
      <div id="viewDiv" ref={MapEl}></div>
    </>
  )
}

export default DisplayMapYT
