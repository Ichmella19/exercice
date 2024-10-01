import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './composants/header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
