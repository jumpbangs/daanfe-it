import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import Contact from '../pages/contact-us';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
