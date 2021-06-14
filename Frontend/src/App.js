import "./App.css";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/CartPage";
import ContactUsPage from "./Pages/ContactUsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
