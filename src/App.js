import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import DisplayMapYT from "./pages/DisplayMapYT.js"
import DisplayMap from "./pages/DisplayMap.js"
import DisplayYourLocation from "./pages/DisplayYourLocation.js"
import AddToMap from "./pages/AddToMap.js"
import AddFeature from "./pages/AddFeature.js"
import FindPlaces from "./pages/FindPlaces.js"
import DisplayWebMap from "./pages/DisplayWebMap.js"
import SfiEmbeddedWidgets from "./pages/SfiEmbeddedWidgets.js"
import SfiSketchPolygon from "./pages/SfiSketchPolygon.js"
import ExploringSketch from "./pages/ExploringSketch.js"
import StyleFeatureLayer from "./pages/StyleFeatureLayer.js"

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Display Map with loadModules</Link>
            </li>
            <li>
              <Link to="/display-map">Display Map</Link>
            </li>
            <li>
              <Link to="/display-your-location">Display Your Location</Link>
            </li>
            <li>
              <Link to="/add-to-map">Add To Map</Link>
            </li>
            <li>
              <Link to="/add-feature">Add a Feature Layer</Link>
            </li>
            <li>
              <Link to="/style-feature-layer">Style a Feature Layer</Link>
            </li>
            <li>
              <Link to="/find-places">Find places</Link>
            </li>
            <li>
              <Link to="/display-web-map">Display Web Map</Link>
            </li>
            <li>
              <Link to="/sfi-embedded-widgets">SFI Embedded Widgets Sample</Link>
            </li>
            <li>
              <Link to="/sfi-sketch-polygon">SFI Sketch Polygon Sample</Link>
            </li>
            <li>
              <Link to="/exploring-sketch">Exploring Sketch</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path="/display-map">
              <DisplayMap />
            </Route>
            <Route path="/display-your-location">
              <DisplayYourLocation />
            </Route>
            <Route path="/add-to-map">
              <AddToMap />
            </Route>
            <Route path="/add-feature">
              <AddFeature />
            </Route>
            <Route path="/find-places">
              <FindPlaces />
            </Route>
            <Route path="/display-web-map">
              <DisplayWebMap />
            </Route>
            <Route path="/sfi-embedded-widgets">
              <SfiEmbeddedWidgets />
            </Route>
            <Route path="/sfi-sketch-polygon">
              <SfiSketchPolygon />
            </Route>
            <Route path="/exploring-sketch">
              <ExploringSketch />
            </Route>
            <Route path="/style-feature-layer">
              <StyleFeatureLayer />
            </Route>
            <Route path="/">
              <DisplayMapYT />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
}

export default App
