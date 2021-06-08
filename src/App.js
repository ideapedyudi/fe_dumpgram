// ----- import landingpage -----
import LandingPage from "./components/pages/LandingPage";
import FeedPage from "./components/pages/FeedPage";
import ExplorePage from "./components/pages/ExplorePage";
import ProfilePeopleFeed from './components/pages/ProfilePeopleFeed';
import ProfilePeopleExplore from './components/pages/ProfilePeopleExplore';
import CreatePostPage from './components/pages/CreatePostPage';
import MessagePage from './components/pages/MessagePage';
import ChatPage from './components/pages/ChatPage';
import EditProfilePage from './components/pages/EditProfilePage';
import Notifikasi from './components/organisms/Notifikasi';

// ---- rounter -----
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          {/* landing page */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/FeedPage" component={FeedPage} />
          <Route path="/ExplorePage" component={ExplorePage} />
          <Route path="/ProfilePeopleFeed" component={ProfilePeopleFeed} />
          <Route path="/ProfilePeopleExplore" component={ProfilePeopleExplore} />
          <Route path="/CreatePostPage" component={CreatePostPage} />
          <Route path="/MessagePage" component={MessagePage} />
          <Route path="/ChatPage" component={ChatPage} />
          <Route path="/EditProfilePage" component={EditProfilePage} />
          <Route path="/Notifikasi" component={Notifikasi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
