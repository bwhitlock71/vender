import "./App.css";
import Chips from './Chips';
import Soda from "./Soda";
import Donut from "./Donut";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Route path="/chips">
          <Chips />
        </Route>
        <Route path="/soda">
          <Soda/>
        </Route>
        <Route path="/donuts">
          <Donut />
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
