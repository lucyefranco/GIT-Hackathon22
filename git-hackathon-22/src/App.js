import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'

function App() {
  return(
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="signin" element={<SignIn />}/>
        </Routes>
    </Router>
  ) 
}

export default App;
