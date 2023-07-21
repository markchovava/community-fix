import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import MainContextProvider from './context/MainContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContextProvider>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  </MainContextProvider>
  
  
)
