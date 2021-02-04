import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Exhibits from "./pages/Exhibits";
import Batman from "./pages/Heros/Batman";
import Superman from "./pages/Heros/Superman";
import WonderWoman from "./pages/Heros/WonderWoman";
import Flash from "./pages/Heros/Flash";
import GreenLantern from "./pages/Heros/GreenLantern";
import Aquaman from "./pages/Heros/Aquaman";
import Martian from "./pages/Heros/Martian";

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Router>
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            sticky="top"
            className="p-2"
          >
            <Navbar.Brand href="/">The Justice League Museum</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/exhibits">Exhibits</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/exhibits">
              <Exhibits />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/batman">
              <Batman />
            </Route>
            <Route path="/superman">
              <Superman />
            </Route>
            <Route path="/wonderwoman">
              <WonderWoman />
            </Route>
            <Route path="/flash">
              <Flash />
            </Route>
            <Route path="/greenlantern">
              <GreenLantern />
            </Route>
            <Route path="/aquaman">
              <Aquaman />
            </Route>
            <Route path="/martian">
              <Martian />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="app_footer">
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
          sticky="bottom"
          className="p-2"
        >
          <Navbar.Brand>&copy; 2021 The Justice League Museum</Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
