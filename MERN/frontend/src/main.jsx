import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonMain from './pages/Home/ButtonMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ButtonMain/>
  </StrictMode>,
)
