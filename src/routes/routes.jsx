import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Overview from '../pages/overview/overview';
import Contact from '../pages/contact/contact';
import Favorites from '../pages/favorites/favorites';
import VistaNew from '../pages/vista-new/vista-new';

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Overview/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/contacts" element={<Contact ver ="overwiew"/>} />
        <Route path="/vistaNew" element={<VistaNew/>} />
    </Routes>
  );
}

export default AppRouter;
