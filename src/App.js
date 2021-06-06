// ----- import landingpage -----
import LandingPage from "./components/pages/LandingPage";
import FeedPage from "./components/pages/FeedPage";
import ExplorePage from "./components/pages/ExplorePage";
import ProfilePeopleFeed from './components/pages/ProfilePeopleFeed';
import ProfilePeopleExplore from './components/pages/ProfilePeopleExplore';
import CreatePostPage from './components/pages/CreatePostPage';
import MessagePage from './components/pages/MessagePage';
import ChatPage from './components/pages/ChatPage';

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
          <Route path="/CreatePostPage" exact component={CreatePostPage} />
          <Route path="/MessagePage" exact component={MessagePage} />
          <Route path="/ChatPage" exact component={ChatPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
