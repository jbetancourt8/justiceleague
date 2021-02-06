import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollTop from "./components/ScrollTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Exhibits from "./pages/Exhibits";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="app">
      <Router>
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
          </Switch>
        </ScrollTop>
      </Router>
    </div>
  );
}

export default App;
