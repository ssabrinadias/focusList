import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Router>
      <h1>To Do List</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
