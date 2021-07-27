import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Home from "./Pages/Home";
import DappIndex from "./Pages/DApp/Index";
import CommunityIndex from "./Pages/Community/Index";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dapps">
            <DappIndex />
          </Route>
          <Route path="/community-projects">
            <CommunityIndex />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
