import React, { useEffect, useRef } from "react"
import Map from "@arcgis/core/Map"
import esriConfig from "@arcgis/core/config"
import MapView from "@arcgis/core/views/MapView"
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import { ARCGIS_API_KEY } from "../globalVariables"

const StyleFeatureLayer = () => {
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

    const trailheadsRenderer = {
      type: "simple",
      symbol: {
        type: "picture-marker",
        url: "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
        width: "18px",
        height: "18px"
      }
    }
    const trailheadsLabels = {
      symbol: {
        type: "text",
        color: "#FFFFFF",
        haloColor: "#333",
        haloSize: "8px",
        font: {
          size: "12px",
          family: "Noto Sans",
          style: "italic",
          weight: "normal"
        }
      },
      labelPlacement: "above-center",
      labelExpressionInfo: {
        expression: "$feature.TRL_NAME"
      }
    }
    // Create the layer and set the renderer
    const trailheads = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
      renderer: trailheadsRenderer,
      labelingInfo: [trailheadsLabels]
    })
    map.add(trailheads)

    // Define a unique value renderer and symbols
    const trailsRenderer = {
      type: "simple",
      symbol: {
        color: "orange",
        type: "simple-line",
        style: "solid"
      },
      visualVariables: [
        {
          type: "size",
          field: "ELEV_GAIN",
          minDataValue: 0,
          maxDataValue: 2300,
          minSize: "3px",
          maxSize: "7px"
        }
      ]
    }
    // Create the layer and set the renderer
    const trails = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
      renderer: trailsRenderer,
      opacity: 0.75
    })
    // Add the layer
    map.add(trails, 0)

    // Add bikes only trails
    const bikeTrailsRenderer = {
      type: "simple",
      symbol: {
        type: "simple-line",
        style: "short-dot",
        color: "blue",
        width: "2px"
      }
    }
    const bikeTrails = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
      renderer: bikeTrailsRenderer,
      definitionExpression: "USE_BIKE = 'YES'"
    })
    map.add(bikeTrails, 1)

    // Add parks with a class breaks renderer and unique symbols
    function createFillSymbol(value, color) {
      return {
        value: value,
        symbol: {
          color: color,
          type: "simple-fill",
          style: "solid",
          outline: {
            style: "none"
          }
        },
        label: value
      }
    }
    const openSpacesRenderer = {
      type: "unique-value",
      field: "TYPE",
      uniqueValueInfos: [createFillSymbol("Natural Areas", "#9E559C"), createFillSymbol("Regional Open Space", "#A7C636"), createFillSymbol("Local Park", "#149ECE"), createFillSymbol("Regional Recreation Park", "#ED5151")]
    }
    // Create the layer and set the renderer
    const openspaces = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
      renderer: openSpacesRenderer,
      opacity: 0.5
    })
    // Add the layer
    map.add(openspaces, 0)

    //cleaning
    return () => {
      if (!!view) {
        view.destroy()
        view = null
      }
    }
  })

  return (
    <>
      <h1>Style a feature layer</h1>
      <div id="viewDiv" ref={mapRef}></div>
    </>
  )
}

export default StyleFeatureLayer
