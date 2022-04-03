import "./styles.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Section from "./Section";
import Footer from "./Footer";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Signin from "./Signin";
import Services from "./Services";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Section />
      <Switch>
          <Route exact path="/" >
               <Home />
          </Route>
          <Route exact path="/Signin">
              <Signin/>
          </Route>
          <Route path="/Services">
             <Services/>
          </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}
