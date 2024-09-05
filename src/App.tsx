import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

function App() {
   return (
      <div className="App">
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TopBar />
         </LocalizationProvider>
      </div>
   );
}

export default App;
