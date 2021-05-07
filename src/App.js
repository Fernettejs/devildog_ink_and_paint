import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Airbrush from "./Pages/Airbrush";
import Canvas from "./Pages/Canvas";
import Murals from "./Pages/Murals";
import Tattoos from "./Pages/Tattoos";
import Shop from "./Pages/Shop";

import ThunderRoads from "./Pages/ThunderRoads";

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
      <Route path="/shop" exact component={Shop} />

      <Route path="/thunder-roads" exact component={ThunderRoads} />
    </Router>
  );
}

export default App;
