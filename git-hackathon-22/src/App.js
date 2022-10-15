import * as React from 'react';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return(
    <Router>
        <Routes>
          <Route exact path="/" element={Home} />
        </Routes>
    </Router>
  ) 
}

export default App;
