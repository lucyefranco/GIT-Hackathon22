import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import HelpPage from "./Pages/HelpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="helppage" element={<HelpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
