import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ButtonMain from './pages/Home/ButtonMain.jsx'
import StoreContext from './page2/StoreContext.jsx'
import ToggleTheme from './components/ToggleTheme/toggleTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ToggleTheme/> */}
    <App/>
  </StrictMode>,
)
