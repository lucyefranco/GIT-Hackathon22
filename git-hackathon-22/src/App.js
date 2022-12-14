import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'
import HelpPage from "./Pages/HelpPage";
import NameYourPlant from './Pages/NameYourPlant';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Arvo',
    ].join(','),
  },
});


function App() {
  return(
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="helppage" element={<HelpPage />} />
        <Route exact path="nameyourplant" element={<NameYourPlant />} />
      </Routes>
    </Router>
    </ThemeProvider>
  ) 
}

export default App;
