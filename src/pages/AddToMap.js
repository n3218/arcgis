import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import Graphic from "@arcgis/core/Graphic"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import { ARCGIS_API_KEY } from "../globalVariables"

const AddToMap = () => {
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
    const graphicsLayer = new GraphicsLayer()
    map.add(graphicsLayer)

    //Create a point
    const point = {
      type: "point",
      longitude: -118.80657463861,
      latitude: 34.0005930608889
    }
    const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40], // Orange
      outline: {
        color: [255, 255, 255], // White
        width: 1
      }
    }
    const pointGraphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol
    })
    graphicsLayer.add(pointGraphic)

    // Create a line geometry
    const polyline = {
      type: "polyline",
      paths: [
        [-118.821527826096, 34.0139576938577], //Longitude, latitude
        [-118.814893761649, 34.0080602407843], //Longitude, latitude
        [-118.808878330345, 34.0016642996246] //Longitude, latitude
      ]
    }
    const simpleLineSymbol = {
      type: "simple-line",
      color: [226, 119, 40], // Orange
      width: 2
    }
    const polylineGraphic = new Graphic({
      geometry: polyline,
      symbol: simpleLineSymbol
    })
    graphicsLayer.add(polylineGraphic)

    // Create a polygon geometry
    const polygon = {
      type: "polygon",
      rings: [
        [-118.818984489994, 34.0137559967283], //Longitude, latitude
        [-118.806796597377, 34.0215816298725], //Longitude, latitude
        [-118.791432890735, 34.0163883241613], //Longitude, latitude
        [-118.79596686535, 34.008564864635], //Longitude, latitude
        [-118.808558110679, 34.0035027131376] //Longitude, latitude
      ]
    }
    const simpleFillSymbol = {
      type: "simple-fill",
      color: [227, 139, 79, 0.8], // Orange, opacity 80%
      outline: {
        color: [255, 255, 255],
        width: 1
      }
    }
    const popupTemplate = {
      title: "{Name}",
      content: "{Description}"
    }
    const attributes = {
      Name: "Graphic",
      Description: "I am a polygon"
    }
    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: simpleFillSymbol,
      attributes: attributes,
      popupTemplate: popupTemplate
    })
    graphicsLayer.add(polygonGraphic)

    // cleaning
    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
  })

  return (
    <>
      <h1>Add a point, line, and polygon</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default AddToMap
