import Jsonwithxml from "./Jsonwithxml";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jsonpretty from "./Jsonpretty";
import Xmlformat from "./Xmlformat";
import Xmlviewer from "./Xmlviewer";
import FetchHome from "./FetchHome";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jsonpretty">
            <Jsonpretty />
          </Route>
          <Route path="/fetchpretty">
            <FetchHome />
          </Route>
          <Route path="/xml-formatter">
            <Xmlformat />
          </Route>
          <Route path="/xml-viewer">
            <Xmlviewer />
          </Route>
          <Route path="/json-xml-download">
            <Jsonwithxml />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
