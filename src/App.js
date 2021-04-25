import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Airbrush from "./Pages/Airbrush";
import Canvas from "./Pages/Canvas";
import Murals from "./Pages/Murals";
import Tattoos from "./Pages/Tattoos";


function App() { 
  return (
    <Router>
      <div className="App"></div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/airbrush" exact component={Airbrush} />
      <Route path="/canvas" exact component={Canvas} />
      <Route path="/murals" exact component={Murals} />
      <Route path="/tattoos" exact component={Tattoos} />
    </Router>
  );
}

export default App;
