import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateTask from "../features/TaskCreate";
import Home from "../pages/Home";

const AppRoutes: FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
