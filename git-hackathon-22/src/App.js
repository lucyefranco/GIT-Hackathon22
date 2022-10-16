import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn'

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
          <Route exact path="signin" element={<SignIn />}/>
        </Routes>
    </Router>
    </ThemeProvider>
  ) 
}

export default App;
