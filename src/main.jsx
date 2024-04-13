import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.scss'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
)
