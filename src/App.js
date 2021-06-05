// ----- import landingpage -----
import LandingPage from "./components/pages/LandingPage";
import FeedPage from "./components/pages/FeedPage";
import ExplorePage from "./components/pages/ExplorePage";
import ProfilePeopleFeed from './components/pages/ProfilePeopleFeed';
import ProfilePeopleExplore from './components/pages/ProfilePeopleExplore'

// ---- rounter -----
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* landing page */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/FeedPage" exact component={FeedPage} />
          <Route path="/ExplorePage" exact component={ExplorePage} />
          <Route path="/ProfilePeopleFeed" exact component={ProfilePeopleFeed} />
          <Route path="/ProfilePeopleExplore" exact component={ProfilePeopleExplore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
