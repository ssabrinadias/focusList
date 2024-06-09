import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header";

import Home from "./Home";
import NewTask from "./NewTask";

const AppRoutes: FunctionComponent = () => {
  return (
    <Router>
      <Header title="Sei la" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-task" element={<NewTask />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
