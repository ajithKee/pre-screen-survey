import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

const palette = {
   primary: orange,
};

const theme = createTheme({
   palette: palette,
   spacing: 4,
});

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
