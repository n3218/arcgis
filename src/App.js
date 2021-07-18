
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import DisplayMapYT from './pages/DisplayMapYT.js'
import DisplayMap from './pages/DisplayMap.js'

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
              <Link to="/displaymap">Display Map</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

<main>
        <Switch>
          <Route path="/about">
            <DisplayMap />
          </Route>
          <Route path="/displaymap">
            <DisplayMap />
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

export default App;
