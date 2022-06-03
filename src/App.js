import * as React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components
import Home from './routes/Home/Home';

function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark' 
        }
      })
  );


  return (
    <ThemeProvider theme={theme}>
      <script src="https://www.youtube.com/iframe_api" defer></script>
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
