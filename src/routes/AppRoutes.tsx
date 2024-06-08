import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <h1>To Do List</h1>
      <Routes>
        <Route path="/" element={<div>page 1</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
