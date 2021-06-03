import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* landing page */}
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
