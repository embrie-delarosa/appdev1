import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import UsersFetch from './UsersFetch.jsx'
//import TodosFetchAxios from './TodosFetchAxios.jsx'
import PostsFetchAsync from './PostsFetchAsync.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsFetchAsync />
  </StrictMode>,
)
