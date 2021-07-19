import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import DisplayMapYT from "./pages/DisplayMapYT.js"
import DisplayMap from "./pages/DisplayMap.js"
import DisplayYourLocation from "./pages/DisplayYourLocation.js"
import AddToMap from "./pages/AddToMap.js"

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Display Map YT</Link>
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
