import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { apiCountries } from './api/apiCountries'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={apiCountries}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
