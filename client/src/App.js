import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/admin" component={Dashboard} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
