import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Sketch from "@arcgis/core/widgets/Sketch"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle"
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery"

import { ARCGIS_API_KEY } from "../globalVariables"

const ExploringSketch = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY

  useEffect(() => {
    const map = new Map({
      basemap: "arcgis-topographic" // Basemap layer service
    })
    let mapView = new MapView({
      map: map,
      center: [-118.805, 34.027], // Longitude, latitude
      zoom: 13, // Zoom level
      container: mapRef.current // Div element
    })

    let sketchLayer = new GraphicsLayer({ id: "sketchLayer" })
    map.add(sketchLayer)
    let sketch = new Sketch({
      layer: sketchLayer,
      view: mapView,
      creationMode: "single",
      visibleElements: {
        createTools: {
          point: true,
          polyline: true,
          polygon: true,
          rectangle: true,
          circle: true
        },
        selectionTools: {
          "rectangle-selection": true,
          "lasso-selection": true
        },
        undoRedoMenu: true
      }
    })
    // // disable the "click select tool" by default
    sketch.viewModel.updateOnGraphicClick = false
    mapView.ui.add(sketch, "top-right")

    // wire up event handlers for create and delete events
    sketch.on("create", function (event) {
      // console.log(event)
      if (event.state === "complete") {
        console.log(event.graphic)
        sketch.visibleElements.createTools.polygon = false
        sketch.visibleElements.createTools.rectangle = false
        sketch.visibleElements.createTools.circle = false
        sketch.viewModel.updateOnGraphicClick = true
        sketch.visibleElements.undoRedoMenu = true
      }
    })

    const basemapToggle = new BasemapToggle({
      view: mapView,
      nextBasemap: "arcgis-imagery"
    })
    mapView.ui.add(basemapToggle, "bottom-right")

    // Select basemaps from a gallery
    const basemapGallery = new BasemapGallery({
      view: mapView,
      source: {
        query: {
          title: '"World Basemaps for Developers" AND owner:esri'
        }
      }
    })
    mapView.ui.add(basemapGallery, "top-right") // Add to the view

    return () => {
      if (!!mapView) {
        mapView.destroy()
        mapView = null
      }
    }
  })

  return (
    <>
      <h1>Exploring Sketch</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default ExploringSketch
