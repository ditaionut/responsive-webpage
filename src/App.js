import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Singup from "./components/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={Singup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
