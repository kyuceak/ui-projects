import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {Person,App} from './App.jsx'
// import Greeting from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Person />
  </StrictMode>,
)
