import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx'
import Favorites from './components/favorites/favorites.jsx'
import Contact from './components/contact/contact.jsx'
import New from './components/new/new.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Favorites />
      <Contact />
      <New />
    </BrowserRouter>
  </React.StrictMode>,
)
