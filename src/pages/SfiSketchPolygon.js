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
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Sketch from "@arcgis/core/widgets/Sketch"
import { ARCGIS_API_KEY } from "../globalVariables"

const SfiSketchPolygon = () => {
  const mapRef = useRef()
  esriConfig.apiKey = ARCGIS_API_KEY
  let mapView
  let sketchLayer
  let sketch

  useEffect(() => {
    const map = new Map({
      basemap: "streets"
    })
    mapView = new MapView({
      container: mapRef.current, // Div element Reference to the view div created in step 5
      map: map, // Reference to the map object created before the view
      zoom: 15, // Sets zoom level based on level of detail (LOD)
      center: [-96.73699, 43.494465] // Sets center point of view using longitude,latitude
    })

    //// add some cool widgets to enhance its default functionality
    const homeWidget = new Home({
      view: mapView
    })
    mapView.ui.add(homeWidget, { position: "top-left", index: 0 })

    const locateWidget = new Locate({
      view: mapView,
      graphic: new Graphic({
        symbol: { type: "simple-marker" }
      })
    })
    mapView.ui.add(locateWidget, "top-left")

    const basemapToggle = new BasemapToggle({
      view: mapView,
      nextBasemap: "hybrid"
    })
    mapView.ui.add(basemapToggle, { position: "top-left", index: 0 })

    const searchWidget = new Search({
      view: mapView
    })
    mapView.ui.add(searchWidget, { position: "top-right", index: 0 })

    const scaleBar = new ScaleBar({
      view: mapView
    })
    mapView.ui.add(scaleBar, { position: "bottom-left" })

    const ccWidget = new CoordinateConversion({
      view: mapView,
      multipleConversions: false
    })
    mapView.ui.add(ccWidget, "bottom-right")

    //////// SETUP THE SKETCH WIDGET ////////
    sketchLayer = new GraphicsLayer({ id: "sketchLayer" })
    map.add(sketchLayer)
    sketch = new Sketch({
      layer: sketchLayer,
      view: mapView,
      // graphic will be selected as soon as it is created
      creationMode: "single",
      //availableCreateTools: ["polygon", "rectangle", "circle"],
      visibleElements: {
        createTools: {
          point: false,
          polyline: false,
          polygon: true,
          rectangle: true,
          circle: true
        },
        selectionTools: {
          "rectangle-selection": false,
          "lasso-selection": false
        },
        undoRedoMenu: false
      }
    })
    // // disable the "click select tool" by default
    sketch.viewModel.updateOnGraphicClick = false
    mapView.ui.add(sketch, "top-right")

    // wire up event handlers for create and delete events
    sketch.on("create", function (event) {
      console.log(event)
      if (event.state === "complete") {
        console.log(event.graphic)
        sketch.visibleElements.createTools.polygon = false
        sketch.visibleElements.createTools.rectangle = false
        sketch.visibleElements.createTools.circle = false
        sketch.viewModel.updateOnGraphicClick = true
        sketch.visibleElements.undoRedoMenu = true
      }
    })

    // handle delete graphic
    // there doesn't appear to be a way to disable delete functionality,
    // maybe can set some css on U/I to display:none to hide the delete button from user
    sketch.on("delete", function (event) {
      console.log(event)
      if (event.type === "delete") {
        if (window.confirm("Are you sure you want to delete?")) {
          //allow it to be deleted and re-enable the draw tools
          sketch.visibleElements.createTools.polygon = true
          sketch.visibleElements.createTools.rectangle = true
          sketch.visibleElements.createTools.circle = true
          sketch.viewModel.updateOnGraphicClick = false
          sketch.visibleElements.undoRedoMenu = false
        } else {
          // if you don't want it deleted, just put it back in the layer
          const deleted = event.graphics[0]
          sketchLayer.add(deleted)
        }
      }
    })

    // cleaning
    return () => {
      if (!!mapView) {
        mapView.destroy()
        mapView = null
      }
    }
  })

  //hook up the button!
  const okButtonHandler = function (event) {
    const graphic = sketchLayer.graphics.getItemAt(0)
    if (graphic) {
      alert("Nice work, that's a fine looking polygon!")
      console.log(graphic)
      const oldSymbol = graphic.symbol
      const newSymbol = {
        type: "simple-fill",
        style: "solid",
        color: "blue",
        outline: {
          color: "white",
          width: "2.0"
        }
      }
      graphic.symbol = newSymbol
      window.setTimeout(function () {
        graphic.symbol = oldSymbol
      }, 250)
    } else {
      alert("You must draw a polygon.")
    }
  }

  const cancelButtonHandler = function (event) {
    sketchLayer.removeAll()
    sketch.visibleElements.createTools.polygon = true
    sketch.visibleElements.createTools.rectangle = true
    sketch.visibleElements.createTools.circle = true
    sketch.viewModel.updateOnGraphicClick = false
    sketch.visibleElements.undoRedoMenu = false
  }

  return (
    <>
      <h1>SFI Sketch Polygon Sample</h1>
      <div id="viewDiv" ref={mapRef}></div>
      <div>
        <button id="ok-button" onClick={okButtonHandler}>
          OK
        </button>
        <button id="cancel-button" onClick={cancelButtonHandler}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default SfiSketchPolygon
