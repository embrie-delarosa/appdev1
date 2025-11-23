import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UsersFetch from './UsersFetch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersFetch />
  </StrictMode>,
)
