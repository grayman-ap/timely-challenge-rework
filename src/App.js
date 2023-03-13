import { BigTeam, Home, Login, Pricing, Sales, SmallTeam } from "./pages";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { color } from "./utils/data/data";
import TeamSize from "./components/Team";
import BlogApp from "./blog/pages/BlogApp";
function App() {
  return (
    <Router>
    <div className="app" style={{color:color.white}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/get-started/lets-begin" element={<Login />} />
          <Route exact path="/sales" element={<Sales />} />
          <Route exact path="/get-started/team-size" element={<TeamSize />} />
          <Route exact path="/get-started/small-teams" element={<SmallTeam  />} />
          <Route exact path="/get-started/big-teams" element={<BigTeam />} />
          <Route exact path="/blog" element={<BlogApp />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
