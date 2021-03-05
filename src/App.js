import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Exhibits from "./pages/Exhibits";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/exhibits">
            <Exhibits />
          </Route>
          <Route path="/:id">
            <Detail />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;
