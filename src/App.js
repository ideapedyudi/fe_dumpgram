// ----- import landingpage -----
import LandingPage from "./components/pages/LandingPage";
import Feed from "./components/pages/Feed"
// ---- rounter -----
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* landing page */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/Feed" exact component={Feed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
