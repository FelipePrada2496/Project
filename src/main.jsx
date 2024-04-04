import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar/navbar.jsx'
import Routes from './routes/routes.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
      <Navbar />
      <Routes />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
