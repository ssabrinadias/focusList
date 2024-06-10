import { FunctionComponent, Suspense } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header";

const Home = React.lazy(() => import("./Home"));
const NewTask = React.lazy(() => import("./NewTask"));

const AppRoutes: FunctionComponent = () => {
  return (
    <Router>
      <Header title="Sei la" />
      <Suspense fallback={<div>Carregando tarefas...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-task" element={<NewTask />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
