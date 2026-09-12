import React from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Portfolio from './portfolio';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Portfolio />
      <SpeedInsights />
    </>
  );
}

export default App;
