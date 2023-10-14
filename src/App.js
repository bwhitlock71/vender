import "./App.css";
import Chips from './Chips';
import Soda from "./Soda";
import Donut from "./Donut";
import NavBar from "./NavBar";

import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/chips" element={<Chips />}></Route>
          <Route path="/soda" element={<Soda />}></Route>
          <Route path="/donuts" element={<Donut />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
