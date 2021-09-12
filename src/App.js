import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Blog from "./Components/pages/Blog";
import AboutUs from "./Components/pages/AboutUs";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import Home from "./Components/pages/Home";
import Cart from "./Components/pages/Cart";
import Shop from "./Components/pages/Shop";
import Contact from "./Components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>

        <Route exact path="/Blog">
          <Blog />
        </Route>
        <Route exact path="/Shop">
          <Shop />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
