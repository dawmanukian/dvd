import NavBar from "./components/navbar/NavBar";
import Home from "./page/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Premium from "./page/premium/Premium";
import Upgrade from "./page/upgrade/Upgrade";
import Top from "./page/top/Top";
import Dvd from "./page/dvd/Dvd";
import DvdBox from "./page/dvd-box/DvdBox";
import Quest from "./page/quest/Quest";

function App() {


  
  return (
    <div className="data">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/upgrade/:type" element={<Upgrade />} />
          <Route path="/top" element={<Top />} />
          <Route path="/scream" element={<Dvd />} />
          <Route path="/dvdbox" element={<DvdBox />} />
          <Route path="/quest" element={<Quest />} />
        </Routes>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
