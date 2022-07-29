import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AlertProvider from './context/alert/alertProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>
)
