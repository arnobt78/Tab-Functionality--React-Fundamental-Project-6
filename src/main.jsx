import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Entry point: mount the React app into the #root element in index.html.
// StrictMode helps surface side-effect and deprecation issues during development (no impact in production).
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
