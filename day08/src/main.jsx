import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mycom from './Mycom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mycom />
  </StrictMode>
)
