import { Home, Login, Pricing, Sales } from "./pages";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { color } from "./utils/data/data";
function App() {
  return (
    <Router>
    <div className="app" style={{color:color.white}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="sales" element={<Sales />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
