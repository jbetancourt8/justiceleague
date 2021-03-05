import {
  BrowserRouter as Router,
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
          <Route exact path="/exhibits">
            <Exhibits />
          </Route>
          <Route exact path="/:id">
            <Detail />
          </Route>
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </ScrollTop>
    </Router>
  );
}

export default App;
